import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <section id="contact">
      <h1 class="section-header">_ contact</h1>

      <div class="button_cont" align="center">
        <a
          class="button-home"
          href="/"
          // target="_blank"
          // rel="nofollow noopener"
        >
          HOME
        </a>
      </div>

      <div className="form-container">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Noms & Prénoms"
          name="name"
          // value=""
          required
        />
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="E-mail"
          name="email"
          // value=""
          required
        />
        <textarea
          class="form-control"
          className="form-control-text"
          rows="10"
          placeholder="Description de votre projet"
          name="message"
          required
        ></textarea>

        <div class="button_cont" align="center">
          <a
            class="button icon-send"
            href=""
            target=""
            rel="nofollow noopener"
          >
            ENVOYER
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
