function SecondHero() {
  return (
    <section className="second-hero mt-[100px] w-full flex justify-between p-5 md:bg-[#f3f3f3] md:rounded-3xl md:h-[300px]">
      <div className="wrapper flex flex-col gap-4 bg-[#f3f3f3] rounded-[20px] p-8 md:w-[40%] md:items-start">
        <h3 className="font-semibold md:text-xl">Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <a href="" className="btn text-white  bg-[#191a23] normal-case">
          Get your proposal
        </a>
      </div>
      <div className="img hidden md:flex">
        <img className="" src="./public/images/Frame 19.png" alt="" />
      </div>
    </section>
  );
}
export default SecondHero;
