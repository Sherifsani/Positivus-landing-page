export default function Services() {
  function ServiceCard({ id, text, bg, accent, arrow }) {
    return (
      <div
        className={`service-card w-full h-[300px] bg-[${bg}] p-10 flex flex-col justify-between rounded-3xl border-[1px] border-b-[3px] border-black`}
      >
        <div className="text">
          <h3 className={`w-[60%] text-black bg-[${accent}] text-lg font-bold`}>
            {text}
          </h3>
        </div>
        <div className="illustrations flex justify-between w-full items-end">
          <div className="arrow">
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
      text: "Search engine optimization",
      bg: "#f3f3f3",
      accent: "#b9ff66",
      arrow: "dark",
    },
    {
      id: 2,
      text: "Pay-per-click advertising",
      bg: "#b9ff66",
      accent: "#f3f3f3",
      arrow: "dark",
    },
    {
      id: 3,
      text: "Social Media Marketing",
      bg: "#191A23",
      accent: "#f3f3f3",
      arrow: "light",
    },
    {
      id: 4,
      text: "Email Marketing",
      bg: "#f3f3f3",
      accent: "#b9ff66",
      arrow: "dark",
    },
    {
      id: 5,
      text: "Content Creation",
      bg: "#b9ff66",
      accent: "#f3f3f3",
      arrow: "dark",
    },
    {
      id: 6,
      text: "Analytics and Tracking",
      bg: "#191A23",
      accent: "#f3f3f3",
      arrow: "light",
    },
  ];

  const servicesElem = servicesData.map((card) => (
    <ServiceCard
      id={card.id}
      text={card.text}
      bg={card.bg}
      accent={card.accent}
      arrow={card.arrow}
    />
  ));

  return (
    <section className="services p-4">
      <div className="services-head  flex flex-col gap-4 items-center md:flex-row">
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
