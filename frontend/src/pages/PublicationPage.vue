<script setup>
import headerImg from '../assets/header.png'
import pubImg from '../assets/pub.png' // ✅ make sure this file exists
</script>

<template>
  <div class="site-wrapper">

    <!-- 🔥 HEADER -->
    <header class="header">
      <img :src="headerImg" class="header-bg" />
      <div class="overlay"></div>

      <!-- ✅ NAV -->
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/publications">Publications</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/people">People</router-link>
      </nav>
    </header>

    <!-- 🔥 BODY -->
    <section class="publication-body">

      <img v-if="pubImg" :src="pubImg" class="pub-img" />

     <h2>2025</h2>

<p>
  Antoine Nzeyimana and Andre Niyongabo Rubungo. 2025.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    KinyaColBERT: A Lexically Grounded Retrieval Model for Low-Resource Retrieval-Augmented Generation
  </a>.
  arXiv preprint arXiv:2507.03241.
</p>

<h2>2024</h2>

<p>
  Antoine Nzeyimana. 2024.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    Low-resource neural machine translation with morphological modeling
  </a>.
  In Findings of the Association for Computational Linguistics: NAACL 2024,
  pages 182–195, Mexico City, Mexico.
  Association for Computational Linguistics.
</p>

<p>
  Antoine Nzeyimana. 2024.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    Improving Kinyarwanda Speech Recognition via Semi-Supervised Learning
  </a>.
  In ICASSP 2024-2024 IEEE International Conference on Acoustics,
  Speech and Signal Processing (ICASSP), pp. 10701-10705. IEEE.
</p>

<h2>2023</h2>

<p>
  Antoine Nzeyimana. 2023.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    KinSPEAK: Improving speech recognition for Kinyarwanda via semi-supervised learning methods
  </a>.
  arXiv preprint arXiv:2308.11863.
</p>

<p>
  Antoine Nzeyimana. 2023.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    KINLP at SemEval-2023 Task 12: Kinyarwanda Tweet Sentiment Analysis
  </a>.
  In Proceedings of the 17th International Workshop on Semantic Evaluation
  (SemEval-2023), pages 718–723, Toronto, Canada.
  Association for Computational Linguistics.
</p>

<h2>2022</h2>

<p>
  Antoine Nzeyimana and Andre Niyongabo Rubungo. 2022.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    KinyaBERT: a Morphology-aware Kinyarwanda Language Model
  </a>.
  In Proceedings of the 60th Annual Meeting of the Association for
  Computational Linguistics (Volume 1: Long Papers),
  pages 5347–5363, Dublin, Ireland.
  Association for Computational Linguistics.
  <b>Best Linguistic Insight Paper</b>
</p>

<h2>2020</h2>

<p>
  Antoine Nzeyimana. 2020.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    Morphological disambiguation from stemming data
  </a>.
  In Proceedings of the 28th International Conference on Computational
  Linguistics, pages 4649–4660, Barcelona, Spain (Online).
  International Committee on Computational Linguistics.
</p>

<h2>2011</h2>

<p>
  Antoine Nzeyimana and Aliane Bagwaneza. 2011.
  <a 
    href="https://github.com/kinlp"
    target="_blank"
  >
    Design and Implementation of a Lexical Analyzer for Text in Kinyarwanda
  </a>.
  Kigali Institute of Science and Technology (KIST).
  Undergraduate Honours Project ID: CEIT/FTY5/11/1.
</p>

    </section>

    <!-- 🔥 FOOTER -->
    <footer class="footer">
      <h4>KINLP R&D Ltd</h4>

      <p>
        Address:
        <a 
          href="https://www.google.com/maps/search/?api=1&query=KG+147+St+Kimironko+Kigali+Rwanda"
          target="_blank"
        >
          KG 147 St, Plot 7, Kimironko, Gasabo, Kigali, RWANDA
        </a>
      </p>

      <p>
        Email:
        <a href="mailto:info@kinlp.com">
          info@kinlp.com
        </a>
        |
        Phone:
        <a href="tel:+250788676902">
          (+250)788-676-902
        </a>
      </p>

      <p>
        <a href="https://www.kinlp.com" target="_blank">
          www.kinlp.com
        </a>
      </p>
    </footer>

  </div>
</template>

<style scoped>

/* HEADER */
.header {
  position: relative;
  height: 220px;
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
  background: rgba(0,0,0,0.35);
}

/* NAV */
.nav {
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  gap: 25px;
  z-index: 2;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav a:hover {
  color: #00c3ff;
}

/* BODY */
.publication-body {
  padding: 40px;
  max-width: 900px;
  margin: auto;
}

.pub-img {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
}

.publication-body h2 {
  margin-top: 30px;
  color: #0b3d91;
}

.publication-body p {
  margin-top: 10px;
  line-height: 1.6;
}

/* FOOTER */
.footer {
  background: rgb(80, 152, 224);
  text-align: center;
  padding: 30px;
  margin-top: 40px;
}

/* MOBILE */
@media (max-width: 768px) {
  .nav {
    right: 10px;
    flex-direction: column;
    gap: 10px;
  }

  .publication-body {
    padding: 20px;
  }
}

</style>