import PersonalSection from "./../components/CV/PersonnalSection";
import DetailsSection from "./../components/CV/DetailsSection";
import data from "./../components/CV/cv-content.json";
import "./../styles/cv.css";

const CvPage = () => {
  return (
    <div className={"container__cv"}>
      <PersonalSection
        imageUrl={data.imageUrl}
        fullName={data.fullName}
        title={data.title}
        about={data.about}
        hobbies={data.hobbies}
        contactItems={data.contactItems}
      />
      <DetailsSection detailsData={data} />
    </div>
  );
};

export default CvPage;
