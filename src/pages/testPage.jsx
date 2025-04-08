import AboutMe from "../components/about/testAboutComponent";
const TestPage = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <div className="relative flex justify-center items-center min-h-[600px] overflow-visible">
        <AboutMe />
      </div>
    </div>
  );
};

export default TestPage;
