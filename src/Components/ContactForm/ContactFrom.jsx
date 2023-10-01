import Button from "../Button/Button";
import styles from "../ContactForm/ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactFrom = () => {
  const [name, setName] = useState("Deepak");
  const [email, setEmail] = useState("demo@gmail.com");
  const [text, setText] = useState("Dumy name");
  const onSubmit = (e) =>{
    e.preventDefault();
    setName(e.target[0].value); 
    setEmail(e.target[1].value); 
    setText(e.target[2].value); 
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button  text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form action="" onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">text</label>
            <textarea type="text" name="text" rows={4} />
          </div>
          <div style={{
            display:"flex",
            justifyContent:"end"
          }}>
            <Button   text="SUBMIT" />
          </div>
        </form>
      <div>
        {
          `${name} ${email} ${text}`
        }
      </div>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/Service 24_7-pana 1.svg" alt="image" />
      </div>
    </section>
  );
};

export default ContactFrom;
