<template>
  <div class="faq">
      <h4 class="Signika-Bold">Frequently Asked Questions</h4>

      <h4 class="Signika-Bold">How can I place an order?</h4>
      <p class="Signika-Light">See our how to order a cake tab for this.</p>

      <h4 class="Signika-Bold">Can I order online?</h4>
      <p class="Signika-Light">We do not finalize any orders through e-mail or any social networking sites. You may send photos/details to us for pricing at test@aol.com, but you must then call to finish the order. All orders require a deposit to ensure your order is placed.</p>

      <h4 class="Signika-Bold">Is a deposit required when placing an order?</h4>
      <p class="Signika-Light">We require at least half of the total as the deposit.</p>

      <h4 class="Signika-Bold">What forms of payment do you accept?</h4>
      <p class="Signika-Light">We accept MasterCard, Visa, Discover, American Express & Zelle.</p>
      <p  class="Signika-Light">Personal or Business Checks can me mailed and must be cleared 1 week prior to event.</p>

      <h4 class="Signika-Bold">How far in advance should I order a custom cake?</h4>
      <p class="Signika-Light">The earlier the better, we suggest 2-3 weeks.</p>

      <h4 class="Signika-Bold">Can I make changes to my cake after I order?</h4>
      <p class="Signika-Light">You can make changes a week before your delivery/pick up date. Changes can be made by calling us at 123456789.</p>

      <h4 class="Signika-Bold">Refund/Exchange Policy</h4>
      <p class="Signika-Light">We take pride in our desserts and cakes. If you are unhappy with your order and/or purchase, immediately notify us (within 24 hours ) of your concern  We retain the right to judge our product quality for ourselves & determine the amount that can be refunded. All refunds will be provided as in-store credit.</p>
  </div>
</template>

<script>
export default {
  name: "faq"
}
</script>

<style lang="scss" scoped>

.faq {
  margin: 10px;
}

@font-face {
  font-family: "Signika-Bold";
  src: url("../assets/Fonts/Signika-Bold.ttf");
}
@font-face {
    font-family: "Signika-Light";
    src: url("../assets/Fonts/Signika-Light.ttf");
}

.Signika-Bold {
  color: rgb(165, 49, 78);
  font-family: "Signika-Bold";
  font-size: 1.5rem;
}

.Signika-Light {
    color: rgb(0, 0, 0);
    font-family: "Signika-Light";
}

// tablet
@media (min-width: 768px) and (max-width: 1023px) {
 .faq {
  margin: 20px;
}
}

//Desktop
@media (min-width: 1024px) {
.faq {
  margin: 30px;
}
}
</style>