function SecondHero() {
  return (
    <section className="second-hero w-full flex justify-between p-5">
      <div className="wrapper flex flex-col gap-4 bg-[#f3f3f3] rounded-lg">
        <h3>Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <a href="" className="btn text-white  bg-[#191a23]">
          Get your proposal
        </a>
      </div>
      <div className="img hidden md:flex ">
        <img src="./public/images/Frame 19.png" alt="" />
      </div>
    </section>
  );
}
export default SecondHero