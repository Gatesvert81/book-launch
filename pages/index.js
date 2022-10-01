import Head from "next/head";
import Image from "next/image";
import PressCard from "../src/Components/PressCard";
import Button from "../src/Components/Button";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <Head>
        <title>Amalek Book Lauch</title>
        <meta name="description" content="Book Amalek they are everywhere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col relative">
        <div className="w-full h-4/6 bg-white" />
        <div className="w-full h-2/6 bg-black" />
        <div className="w-full h-full absolute top-0 left-0 flex flex-col-reverse md:grid md:grid-cols-2  gap-5 justify-center items-center bg-black/20">
          <div className="w-full h-[60vh] md:h-full flex justify-center md:justify-end items-center ">
            <div className="w-4/6 md:w-1/2 h-[60vh] relative " >
              <Image
                src="/images/book.png"
                alt="book Image"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-full md:h-1/2 " >
            <h2 className="flex flex-col">
              <span>A Book by</span>
              <span>Bless A. Duah</span>
            </h2>
          </div>
        </div>
      </main>
      <section id="About" className="w-full h-fit grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-full h-[40vh] md:h-full relative">
          <Image
            src="/images/profile.png"
            alt="book Image"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className=" w-full p-10 flex flex-col gap-2">
          <h4>My Story</h4>
          <p>
            Sunt adipisicing esse sint ut commodo est ullamco fugiat. Proident
            minim labore tempor do adipisicing deserunt nostrud occaecat laborum
            aute nulla velit. Id magna et duis veniam. Tempor ut commodo ad
            officia minim non officia qui laboris anim officia. Eiusmod deserunt
            nostrud magna ipsum fugiat voluptate nostrud reprehenderit laborum
            fugiat exercitation.
          </p>
          <p>
            Sunt adipisicing esse sint ut commodo est ullamco fugiat. Proident
            minim labore tempor do adipisicing deserunt nostrud occaecat laborum
            aute nulla velit. Id magna et duis veniam. Tempor ut commodo ad
            officia minim non officia qui laboris anim officia. Eiusmod deserunt
            nostrud magna ipsum fugiat voluptate nostrud reprehenderit laborum
            fugiat exercitation.
          </p>
        </div>
      </section>
      <section id="Press" className="w-full h-fit bg-black text-white flex flex-col justify-center items-cemter text-center p-10 gap-10">
        <h3 className="capitalize">In the Press</h3>
        <div className="w-full h-fit grid grid-cols-1 gap-5 md:grid-cols-3 ">
          <PressCard name="James Boe">
            Non occaecat cillum amet in. Ex tempor ex nulla cupidatat eiusmod
            Lorem aliqua voluptate. Amet proident nisi aute nostrud dolore ea
            fugiat. Incididunt commodo esse mollit reprehenderit esse qui duis.
          </PressCard>
          <PressCard name="James Boe">
            Non occaecat cillum amet in. Ex tempor ex nulla cupidatat eiusmod
            Lorem aliqua voluptate. Amet proident nisi aute nostrud dolore ea
            fugiat. Incididunt commodo esse mollit reprehenderit esse qui duis.
          </PressCard>
          <PressCard name="James Boe">
            Non occaecat cillum amet in. Ex tempor ex nulla cupidatat eiusmod
            Lorem aliqua voluptate. Amet proident nisi aute nostrud dolore ea
            fugiat. Incididunt commodo esse mollit reprehenderit esse qui duis.
          </PressCard>
        </div>
      </section>
      <section id="Book Signing" className="flex flex-col gap-10 justify-center items-center py-5">
        <h3>Book Signing</h3>
        <div className="flex flex-col gap-3 md:flex-row ">
          <div className="text-center flex flex-col gap-7">
            <h6>When</h6>
            <p>Oct 08, 2022, 12:00 PM</p>
          </div>
          <div className="w-[60vw] h-0.5 md:w-0.5 md:h-20 bg-black rounded" />

          <div className="text-center flex flex-col gap-7">
            <h6>Where</h6>
            <p>Teshie Presby Church</p>
          </div>
        </div>
      </section>
      <section className="w-full h-[50vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.90891084092!2d-0.2156418!3d5.6072483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e6f1eb37da2da9d!2sAquatec%20Services%20Limited!5e0!3m2!1sen!2sgh!4v1661168994378!5m2!1sen!2sgh"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>
      <section id="Contact" className="w-full h-fit bg-black text-white flex flex-col justify-center items-cemter text-center p-10 gap-10">
        <p>For any media inquires, please contact our agent:</p>
        <p className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <span>Tel: 054-4658-453</span>
          <span>Teshie Presby Church</span>
          <span>Email: info@amalek.com</span>
          <span>P.O Box 154 TN</span>
        </p>
        <form className="w-full grid grid-cols-1 gap-2">
          <fieldset>
            <label>Full Name</label>
            <input type="text" placeholder="Gates Vert" />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input type="email" placeholder="gatesvert@gmail.com" />
          </fieldset>
          <fieldset>
            <label>Telephone Number</label>
            <input type="tel" placeholder="054126847" />
          </fieldset>
          <fieldset>
            <label>Message</label>
            <textarea
              type="text"
              placeholder="I want to give my life to Jesus Christ"
            />
          </fieldset>
          <fieldset>
            <Button style=" w-full primary-btn">Send Message</Button>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
