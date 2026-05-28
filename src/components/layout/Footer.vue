<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="footer-text">
        Data from <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">ExchangeRate API</a>
        • No user data stored on this site
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.app-footer {
  width: 100%;
  padding: 2px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

.footer-content {
  margin-inline: 8vw;
  text-align: center;
}

.footer-text {
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.footer-text a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-text a:hover {
  color: rgba(255, 255, 255, 1);
  text-decoration: underline;
}

@media (max-width: 767px) {
  .app-footer {
    padding: 16px 0;
    background: rgba(255, 255, 255, 0.15);
  }

  .footer-content {
    margin-inline: 1rem;
  }

  .footer-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
  }
}
</style>
