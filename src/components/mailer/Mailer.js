import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Mailer.module.css';
import { Box, Typography, Modal } from '@mui/material';

export function Mailer() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_4dxrg0q', 'template_39l710t', event.target, 'BGCpuxlxHZ8kPI7nV')
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        setShowModal(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.title_form}>Contact Us</h1>
      <form className={styles.form_mail} onSubmit={sendEmail}>
        <div className={styles.mail_container}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>

        <div className={styles.mail_container}>
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <div className={styles.mail_messages}>
          <label>Message</label>
          <textarea
            name="user_message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>

        <button>Send</button>
        {showModal && (
          <Modal open={showModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className={styles.box}>
              <div className={styles.container_modal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Email sent
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Your email has been sent successfully and Adrian Santamaria will receive it.
                </Typography>
                <button onClick={() => setShowModal(false)}>x</button>{' '}
              </div>
            </Box>
          </Modal>
        )}
      </form>
    </div>
  );
}
