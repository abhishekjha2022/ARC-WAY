import { card1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Creative Prints, <br className="sm:block hidden" />
        Graphics Design, Card Design.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our agency provides expert graphic design services, including business
        card and social media posts design, to elevate your brand and help you
        make a lasting impression. Let us help you bring your ideas to life with
        visually stunning designs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
