export default function Services() {
  function ServiceCard({ id, text, text2, bg, accent, arrow }) {
    return (
      <div
        className={`service-card w-full h-[300px] bg-[${bg}] p-10 flex flex-col justify-between items-start rounded-[40px] border-[1px] border-b-[5px] border-black`}
      >
        <div className="text">
          <h3
            className={`w-[unset] text-black  text-lg font-bold lg:text-2xl`}
          >
            <span className={`bg-[${accent}]`}> {text}</span> <br />
            <span className={`bg-[${accent}]`}> {text2}</span>
          </h3>
        </div>
        <div className="illustrations flex justify-between w-full items-end">
          <div className="arrow hover:translate-y-[-10%] transition-transform cursor-pointer">
            <img src={`./public/images/services/arrow-${arrow}.svg`} alt="" />
          </div>
          <div className="image">
            <img
              src={`./public/images/services/illustration-${id}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
  const servicesData = [
    {
      id: 1,
      text: "Search engine",
      text2: "optimization",
      bg: "#f3f3f3",
      accent: "#b9ff66",
      arrow: "dark",
    },
    {
      id: 2,
      text: "Pay-per-click ",
      text2: "advertising",
      bg: "#b9ff66",
      accent: "#f3f3f3",
      arrow: "dark",
    },
    {
      id: 3,
      text: "Social Media",
      text2: "Marketing",
      bg: "#191A23",
      accent: "#f3f3f3",
      arrow: "light",
    },
    {
      id: 4,
      text: "Email",
      text2: " Marketing",
      bg: "#f3f3f3",
      accent: "#b9ff66",
      arrow: "dark",
    },
    {
      id: 5,
      text: "Content",
      text2: "Creation",
      bg: "#b9ff66",
      accent: "#f3f3f3",
      arrow: "dark",
    },
    {
      id: 6,
      text: "Analytics and",
      text2: "Tracking",
      bg: "#191A23",
      accent: "#f3f3f3",
      arrow: "light",
    },
  ];

  const servicesElem = servicesData.map((card) => (
    <ServiceCard
      id={card.id}
      text={card.text}
      text2={card.text2}
      bg={card.bg}
      accent={card.accent}
      arrow={card.arrow}
    />
  ));

  return (
    <section className="services p-4">
      <div className="services-head mb-5 flex flex-col gap-4 items-center md:flex-row">
        <h2 className="text-4xl text-black bg-[#b9ff66]">Services</h2>
        <p className="text-md text-center md:text-start">
          At our digital marketing agency, we offer a range of services
          <br className="hidden md:block" />
          to help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="services-grid grid ">{servicesElem}</div>
    </section>
  );
}
