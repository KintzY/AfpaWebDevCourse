<?php

/**
 * Plugin Name: disclaimer
 * Description: Disclaimer Plugin.
 * Version: 1.0
 * Author: Yann Kintz
 */

register_activation_hook(__FILE__, 'disclaimerActivate');
register_deactivation_hook(__FILE__, 'disclaimerDeactivate');
register_uninstall_hook(__FILE__, 'disclaimerUninstall');

add_action('init', 'addJS');
add_action('wp_head', 'addCSS', 1);
add_action('wp_body_open', 'addModal');

if (is_admin()) {

    function disclaimerMenu() {

        add_menu_page(
            'disclaimer',
            'disclaimer',
            'edit_plugins',
            'disclaimer',
            'disclaimerMessage',
            '',
            65
        );
    }
    add_action('admin_menu', 'disclaimerMenu');
}

function disclaimerActivate() {
    add_option('disclaimer', 'Avertissement!');   
}

function disclaimerDeactivate() {  
}

function disclaimerUninstall() {
    delete_option('disclaimer');
}

function disclaimerMessage() {

    if (!empty($_POST['disclaimer'])) {
            $disclaimerUpdate = $_POST['disclaimer'];
            update_option("disclaimer", $disclaimerUpdate);
            echo "<strong style='color:green; font-size:16px;'>Updated !</strong>";
        }
    echo '
        <h1>Config</h1>
       <form method="post" action="">
            <input name="disclaimer" placeholder="Disclaimer!" type="text" id="disclaimer" value="" class="regular-text" />
            <input type="submit" value="Submit">
        </form> 
    ';
}

function addJS() {
    if (!is_admin()) : wp_register_script('jQuery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js', null, null, true);
        wp_enqueue_script('jQuery');
        wp_register_script('jQuery_modal', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js', null, null, true);
        wp_enqueue_script('jQuery_modal');
        wp_register_script('jQuery_eu', plugins_url('js/disclaimer.js', __FILE__), array('jquery'), '1.1', true);
        wp_enqueue_script('jQuery_eu');
    endif;
}

function addCSS() {
    if (!is_admin()) : wp_register_style('eu-disclaimer-css', plugins_url('css/disclaimer.css', __FILE__), null, null, false);
        wp_enqueue_style('eu-disclaimer-css');
        wp_register_style('modal', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css', null, null, false);
        wp_enqueue_style('modal');
    endif;
}

function addModal() {
    $disclaimer = get_option('disclaimer');
    echo'
        <div id="monModal" class="modal"> 
            <h1 class="center">' . $disclaimer . '</h1>
            <img src="/wp-content/plugins/eu-disclaimer/img/adult_only.jpg" alt="-18"; width=30%>
            <a href="" rel="modal:close" id="actionDisclaimer"><button>OK</button></a> 
            <a href="https://www.google.com"/><button>Back</button></a>
        </div>';
}
