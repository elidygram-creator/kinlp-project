<script setup>
import headerImg from '../assets/header.png'
import productImg from '../assets/product.png'
</script>

<template>
  <div class="site-wrapper">

    <!-- 🔥 HEADER -->
    <header class="header">
      <img :src="headerImg" class="header-bg" />
      <div class="overlay"></div>

      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/publications">Publications</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/people">People</router-link>
      </nav>
    </header>

    <!-- 🔥 BODY -->
    <section class="product-body">

      <img :src="productImg" class="product-img" />

     <h2>RAG-powered IVR Chatbot</h2>

<p>
  Our next-generation IVR chatbot powered by 
  <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank">
    Retrieval-Augmented Generation (RAG)
  </a>, designed specifically to serve Kinyarwanda speakers with unmatched accuracy and accessibility. 
  By combining our state-of-the-art retrieval technology with advanced speech processing models, the system seamlessly understands spoken Kinyarwanda, retrieves the most relevant answers from a domain-specific knowledge base, and delivers natural, clear responses in real time. 
  This groundbreaking solution empowers organizations to provide customer support, information services, and interactive assistance in the language of the people—offering unparalleled performance and opening digital access to millions who rely on Kinyarwanda every day.
</p>

<p>
  If interested, contact us at 
  <a href="mailto:info@kinlp.com">info@kinlp.com</a>
</p>

<hr>

<h2>KinyaBERT*</h2>

<p>
  KinyaBERT* is the culmination of a decade-long, award-winning research effort dedicated to advancing Kinyarwanda and multilingual AI. 
  This powerful embedding language model transforms text into high-quality vector representations, enabling precise retrieval for RAG applications, accurate classification, efficient data labeling, and advanced content analytics. 
  Built on years of innovation and proven excellence, KinyaBERT* delivers both speed and scalability, helping organizations unlock actionable insights from unstructured text. 
  As a trusted foundation for AI-driven solutions, it empowers research, business, and digital transformation with unmatched linguistic depth and reliability.
</p>

<p>
  GitHub:
  <a href="https://github.com/anzeyimana/KinyaBERT" target="_blank">
    https://github.com/anzeyimana/KinyaBERT
  </a>
</p>

<p>
  If interested, contact us at 
  <a href="mailto:info@kinlp.com">info@kinlp.com</a>
</p>

<hr>

<h2>FlexKIN API</h2>

<p>
  FlexKIN API – a powerful and versatile language technology solution designed to bridge communication between Kinyarwanda and English. 
  With high-accuracy text and speech translation, text-to-speech (TTS), and speech-to-text (STT) capabilities, FlexKIN API empowers businesses, developers, and organizations to integrate seamless bilingual communication into their applications, platforms, or workflows. 
  Whether you need to transcribe audio, generate natural speech, or enable real-time translation, FlexKIN API delivers efficiency, precision, and reliability.
</p>

<p>
  FlexKIN API is built for flexibility and scalability. It can be accessed through remote calls to a secure shared service or deployed via a 
  <a href="https://www.docker.com/" target="_blank">
    Docker
  </a> container for on-premise or cloud environments—making it suitable for enterprises with diverse infrastructure needs. 
  Combined with flexible licensing options, FlexKIN API gives you complete control over how you integrate cutting-edge Kinyarwanda-English language technology into your products and services, ensuring smooth deployment and maximum value.
</p>

<p>
  If interested, contact us at 
  <a href="mailto:info@kinlp.com">info@kinlp.com</a>
</p>

<hr>
<h2>
  <a href="https://kinlp.com/musemuzi" target="_blank">
    Musemuzi
  </a>
   — Kinyarwanda Translation App
</h2>

<p>
  Musemuzi is a cutting-edge language tool designed to facilitate seamless communication between Kinyarwanda and English speakers. 
  Leveraging the latest advancements in Artificial Intelligence, Musemuzi offers accurate and nuanced translations, empowering users to navigate diverse linguistic landscapes with confidence. 
  Musemuzi utilizes advanced speech recognition technology to convert spoken Kinyarwanda or English into text, allowing for immediate translation. 
  Our state-of-the-art AI engine then deploys sophisticated algorithms to deliver precise and contextually aware translations, ensuring your message transcends linguistic barriers.
</p>

<p>
  Musemuzi is available for both 
  <a href="https://play.google.com/" target="_blank">
    Android
  </a> 
  and 
  <a href="https://www.apple.com/app-store/" target="_blank">
    iOS (iPhone & iPad)
  </a> platforms.
</p>

<p>
  🔗 Visit Musemuzi:
  <a href="https://kinlp.com/musemuzi" target="_blank">
    https://kinlp.com/musemuzi
  </a>
</p>

<hr>

<h2>
  <a href="https://github.com/anzeyimana/DeepKIN" target="_blank">
    DeepKIN & MorphoKIN</a> — Kinyarwanda NLP Toolkit
  
— Kinyarwanda NLP Toolkit</h2>

<p>
  DeepKIN is a software toolkit for Kinyarwanda natural language processing tasks. 
  The toolkit include open source code in Python and PyTorch and pre-trained models for various tasks. 
  Based on our morphology model for Kinyarwanda, we devise morphology-based language models that adapts Transformer architecture to morphologically-rich languages.
</p>

<p>
  MorphoKIN, the morphological analyzer and generator for Kinyarwanda is a software library for analyzing Kinyarwanda words for natural language processing applications.
</p>

<p>
  GitHub:
  <a href="https://github.com/anzeyimana/DeepKIN" target="_blank">
    https://github.com/anzeyimana/DeepKIN
  </a>
</p>

<hr>
<h2>
  <a href="https://github.com/anzeyimana/KinyaTTS" target="_blank">
    KinyaTTS  </a>
 — Kinyarwanda Text-to-Speech pre-trained model
</h2>

<p>
  KinyaTTS repository on GitHub is a codebase for Kinyarwanda speech synthesis (text-to-speech) based on MB-iSTFT-VITS2 model in PyTorch. 
  The repository provides a pre-trained multi-speaker TTS model that can generate moderate quality Kinyarwanda output.
</p>

<p>
  GitHub:
  <a href="https://github.com/anzeyimana/KinyaTTS" target="_blank">
    https://github.com/anzeyimana/KinyaTTS
  </a>
</p>

<hr>

<h2>
  <a href="https://github.com/anzeyimana/KinyaEmformerRNNT/tree/main/Android/PyTorchStreamingASR" target="_blank">
    Kinyarwanda Mobile ASR </a>— Kinyarwanda on-device speech recognition
  
</h2>
<p>
  Kinyarwanda on-device speech recognition using a selective state space model (e.k.a. Mamba).
</p>

<p>
  We developed a streaming speech recognition model that can be deployed on light-weight architectures such as smartphones without GPU. 
  The model is based on Mamba state-space model architecture and is implemented in PyTorch. 
  A pre-trained model is available for download from 
  <a href="https://drive.google.com/" target="_blank">
    Google Drive
  </a>.
</p>

<p>
  The model can be exported into a compiled TorchScript Lite model deployable on smartphones (See DeepKIN package). 
  An Android app that runs this model is available 
  <a href="https://play.google.com/" target="_blank">
    here
  </a>.
</p>

<p>
  A compiled demo APK file is available for download at this 
  <a href="https://drive.google.com/" target="_blank">
    Google Drive file
  </a>.
</p>

<hr>

<h2>
  <a href="https://kinlp.com/igisoro" target="_blank">
    IGISORO  </a>— Traditional Mancala Board Game
 
</h2>

<p>
  Igisoro is a traditional board game of the Mancala family played primarily in Rwanda, Burundi, DR Congo and Uganda. 
  We implemented a mobile version of the board game that can be played on Android or iOS platforms. 
  The game features single plays as well as double plays where two people can play the game across two devices using Bluetooth Low Energy (BLE) wireless technology.
</p>

<p>
  IGISORO is available for both 
  <a href="https://play.google.com/" target="_blank">
    Android
  </a> 
  and 
  <a href="https://www.apple.com/app-store/" target="_blank">
    iOS (iPhone & iPad)
  </a> platforms.
</p>

    </section>

    <!-- 🔥 FOOTER -->
    <footer class="footer">
      <h4>KINLP R&D Ltd</h4>

      <p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=KG+147+St+Kimironko+Kigali+Rwanda"
          target="_blank"
        >
          KG 147 St, Kimironko, Kigali, Rwanda
        </a>
      </p>

      <p>
        Email: 
        <a href="mailto:info@kinlp.com">info@kinlp.com</a> 
        | 
        Phone: 
        <a href="tel:+250788676902">(+250)788-676-902</a>
      </p>
    </footer>

  </div>
</template>

<style scoped>

/* GLOBAL */
.site-wrapper {
  font-family: Arial, sans-serif;
}

/* HEADER */
.header {
  position: relative;
  height: 45vh;
  min-height: 300px;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

/* NAV */
.nav {
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  gap: 20px;
  z-index: 2;
}

.nav a {
  color: white;
  text-decoration: none;
}

/* BODY */
.product-body {
  padding: 40px;
  max-width: 900px;
  margin: auto;
}

.product-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-body h2 {
  margin-top: 30px;
  color: #0b3d91;
}

.product-body p {
  margin-top: 10px;
  line-height: 1.7;
  text-align: justify;
}

.contact {
  font-weight: bold;
}

/* FOOTER */
.footer {
  background: rgb(80, 152, 224);
  color: white;
  text-align: center;
  padding: 30px;
}

/* MOBILE */
@media (max-width: 768px) {
  .product-body {
    padding: 20px;
  }

  .nav {
    flex-direction: column;
    right: 15px;
  }
}

</style>