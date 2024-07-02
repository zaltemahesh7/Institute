import React from "react";
import nurse from "/images/Hero.webp";
import Card from "./Card";
import StudentCard from "./StudentCard";
import ServiceSuitCards from "./ServiceSuitCards";
import Locations from "./Carousels/Locations";

function Home() {
  let partners = [
    "images/partners/King_s-College-London.webp",
    "images/partners/Arizona-State-University.webp",
    "images/partners/McGill-University.webp",
    "images/partners/queen.webp",
    "images/partners/Queen-Mary-University-London.webp",
    "images/partners/Trinity-College-Dublin.webp",
    "images/partners/University-College-Dublin.webp",
    "images/partners/University-of-Bristol.webp",
    "images/partners/University-of-Edinburgh.webp",
    "images/partners/University-of-Leeds.webp",
    "images/partners/University-of-Manchester.webp",
    "images/partners/University-of-Manitoba.webp",
    "images/partners/University-of-Waterloo.webp",
    "images/partners/victoria.webp",
    "images/partners/warwick.webp",
  ];
  return (
    <>
      <section
        className=" md:grid md:grid-cols-2 max-md:text-center md:justify-between text-white mt-1 md:py-12 md:px-28 md:p-1"
        style={styles.style}
      >
        <div className="md:p-0 p-3">
          <h1 className=" text-5xl md:text-7xl py-5 font-bold">
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <p className="py-5 md:text-3xl text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab
            possimus id libero.
          </p>
          <button className=" bg-[#a2e03a] py-5 px-12 font-bold rounded-full text-2xl text-[#7633fc]">
            {" "}
            Get Started!
          </button>
        </div>
        <div className=" p-5">
          <img className=" m-auto md:h-[26rem]" src={nurse} alt="Nurse" />
        </div>
        <div className=" col-span-2 md:p-6">
          <div className=" md:flex ">
            <Card img="/images/card/100.webp" title="100% Reliable" />
            <Card img="/images/card/free.webp" title="Team of experts" />
            <Card img="/images/card/edu.webp" title="Accessible anywhere" />
          </div>
        </div>
        <div className=" text-2xl text-center col-span-2 p-4">
          Your journey to studying abroad begins with us. From selecting the
          best country for you to getting you settled there, we promise to be
          there every step of the way!
        </div>
      </section>

      <section className="md:px-28">
        <div className=" md:py-12 px-2 py-3 text-center">
          <h2 className="text-5xl">
            Over <span className=" text-[#7633fc]">900+ Global Partners</span>{" "}
            across the world to assist you with
          </h2>
          <p className=" py-3 text-2xl">
            Having one option is not an option. EazyGrad helps you explore the
            world of foreign education opportunities to choose the one which is
            perfect for you!
          </p>
        </div>
        <div className=" grid justify-center overflow-hidden md:grid-cols-5">
          {partners.map((item, index) => (
            <img
              key={index}
              className=" md:p-4 p-1"
              src={item}
              alt="Partners image"
            />
          ))}
        </div>
      </section>

      <section className="md:px-28 pt-10 bg-[#7633fc] text-center text-white">
        <div>
          <h2 className=" text-5xl">
            Our <span className=" text-[#a2e03a]">Exclusive</span> Features
          </h2>
          <p>Here is what makes EazyGrad your best option!</p>
        </div>
        <div className=" grid md:grid-cols-4">
          <Card img="/images/card/100.webp" title="100% Visa success" />
          <Card
            img="/images/card/free.webp"
            title="Exclusive application fee waivers"
          />
          <Card
            img="/images/card/edu.webp"
            title="3 out of 5 students receive scholarships"
          />
          <Card img="/images/card/360.webp" title="360° Profile building" />
        </div>
      </section>

      <section className="md:px-28">
        <div className="p-4">
          <div className="flex flex-col items-center">
            <h2 className=" text-5xl text-[#7633fc]">
              100+ students trusted us
            </h2>
            <h2 className="text-5xl">for writing their success story</h2>
          </div>
        </div>

        <div className="md:p-6 pt-4 grid md:grid-cols-3 md:py-10 gap-10">
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div>
        <p className="m-9 text-center text-5xl">
          Full stack <span className="text-[#7633fc]"> service </span> suite
        </p>
        <div className="px-2 md:grid grid-cols-5 gap-3">
          <ServiceSuitCards />
          <ServiceSuitCards />
          <ServiceSuitCards />
          <ServiceSuitCards />
          <ServiceSuitCards />
        </div>
        <div className="flex justify-center items-center px-6 py-8">
          <button className="border px-6 py-4 rounded-full bg-[#7633fc] text-white text-2xl">
            BOOK YOUR FREE CALL
          </button>
        </div>
        <div className=" flex flex-col justify-center m-auto items-center">
          <div className=" text-center text-3xl md:text-5xl p-5">
            <h2>
              Choose your{" "}
              <span className="text-[#7633fc]">dream study destination</span>
            </h2>
          </div>

          <button className="border px-20 py-4 my-10 rounded-full bg-[#7633fc] text-white text-2xl">
            START
          </button>
        </div>
      </section>

      <section className="md:px-28 text-white bg-[#07bacc]">
        <div className=" p-6 ">
          <div>
            <h2 className=" text-4xl text-center">
              <span className=" text-[#a2e03a]">Student's journey </span>with
              EazyGrad
            </h2>
          </div>

          <div className="md:grid grid-cols-2 gap-5 md:p-6">
            <div className="flex gap-6 md:p-5 m-auto">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dolores veritatis molestiae.
              </p>
              <img
                className=" "
                src="/images/card/100.webp"
                alt="card Images"
              />
            </div>

            <div className="h-42"></div>

            <div className="h-42"></div>
            <div className="flex gap-6 p-5 m-auto">
              <img
                className=" "
                src="/images/card/100.webp"
                alt="card Images"
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dolores veritatis molestiae.
              </p>
            </div>
          </div>
          <div className="p-4 text-center">
            <h2 className=" text-4xl">We've got you covered!</h2>
            <button className="border px-20 py-4 my-10 rounded-full hover:bg-[#7633fc] bg-[#ee5547] text-white md:text-2xl">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      <section className="md:px-28 py-10">
        <div className=" text-center">
          <h2 className=" text-5xl">Interested to know what</h2>
          <h2 className=" text-5xl text-[#7633fc]">
            life at EazyGrad is like?
          </h2>
        </div>
        <div className=" border rounded-3xl my-8 bg-[#ee5547] md:px-5 py-9 flex max-sm:flex-col gap-6">
          <img src={"images/partners/warwick.webp"} alt="" />
          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                optio. Vero, exercitationem. Porro quo dolore labore eum
                officiis quaerat quas, facilis similique? A iure magni deleniti
                obcaecati corrupti praesentium ex id excepturi saepe expedita.
              </p>
            </div>
            <div className=" flex gap-3 max-sm:flex-col">
              <button className="border m-auto md:px-20 md:py-4 my-10 rounded-full bg-[#7633fc] text-white text-xl">
                WORK WITH US!
              </button>
              <button className="border m-auto md:px-20 md:py-4 md:my-10 rounded-full bg-[#7633fc] text-white text-xl">
                WORK WITH US!
              </button>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <h2 className=" text-5xl">Download free study abroad guides</h2>
          <h2 className=" text-5xl text-[#7633fc]">curated by our experts</h2>
        </div>
        <div className="flex gap-4 max-sm:flex-col">
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div>
        <div className="flex max-sm:flex-col max-sm:p-4 py-10 justify-between">
          <div>
            <h2 className=" md:text-5xl max-sm:text-4xl max-sm:p-10">Got questions?</h2>
            <h2 className=" md:text-5xl max-sm:text-4xl"> Find answers here.</h2>
            <div className="flex flex-col gap-4">
              <h2 className=" text-3xl max-sm:text-xl">What is EazyGrad?</h2>
              <hr />
              <h2 className=" text-3xl max-sm:text-xl">
                Can I get a first free consultation call with EazyGrad?
              </h2>
              <hr />
              <h2 className=" text-3xl max-sm:text-xl">How do I get started?</h2>
              <hr />
              <h2 className=" text-3xl max-sm:text-xl">
                How do I book a counselling session?
              </h2>
              <hr />
              <h2 className=" text-3xl max-sm:text-xl">
                Do I need to appear for IELTS / TOEFL?
              </h2>
              <hr />
              <h2 className=" text-3xl max-sm:text-xl">
                What documentation should be submitted with my application for
                approval?
              </h2>
              <hr />
            </div>
          </div>
          <div>
            <img src="images/partners/warwick.webp" alt="" />
          </div>
        </div>
        <div className=" border rounded-3xl justify-between text-white my-8 bg-[#7633fc] px-5 py-9 flex max-sm:flex-col gap-6">
          <div>
            <div>
              <h2 className=" text-4xl">Don't be shy. Say hello!</h2>
              <p>
                Let us help you embark on a journey of a lifetime, book your
                consultation call here.
              </p>
            </div>
            <div className=" flex gap-3 max-sm:flex-col ">
              <button className="border px-20 py-4 my-10 rounded-full bg-[#7633fc] text-white text-xl">
                WORK WITH US!
              </button>
              <button className="border px-20 py-4 my-10 rounded-full bg-[#7633fc] text-white text-xl">
                WORK WITH US!
              </button>
            </div>
          </div>
          <img src={"images/partners/warwick.webp"} alt="" />
        </div>
      </section>

      <section className="px-28">{/* <Locations /> */}</section>

      <section className="px-28"></section>
    </>
  );
}

export default Home;

const styles = {
  style: {
    backgroundColor: "#7633fc",
    // backgroundImage: 'linear-gradient(160deg, #7633fc 0%, #80D0C7 100%)',
  },
};
