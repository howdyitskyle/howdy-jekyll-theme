---
layout: page
title: "Contact"
subtitle: "Let's chat"
hero_image: /assets/illustrations/email.svg
---

<section>
  {% if site.contact.intro %}
  <p class="contact-intro">{{ site.contact.intro }}</p>
  {% endif %}

  {% if site.contact.methods %}
  <div class="contact-info" style="margin-top: 48px;">
    {% for method in site.contact.methods %}
    <div class="contact-item">
      <p class="contact-label">{{ method.label }}</p>
      {% if method.type == "email" %}
      <p class="contact-value"><a href="mailto:{{ method.value }}">{{ method.value }}</a></p>
      {% elsif method.type == "schedule" %}
      <p class="contact-value"><a href="{{ method.url }}" target="_blank" rel="noopener noreferrer">{{ method.value }}<svg class="contact-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></p>
      {% else %}
      <p class="contact-value">{{ method.value }}</p>
      {% endif %}
    </div>
    {% endfor %}
  </div>
  {% endif %}

  {% if site.contact.response_time %}
  <p class="contact-response-time">{{ site.contact.response_time }}</p>
  {% endif %}

  {% if site.contact.form.enabled %}
  {% assign form = site.contact.form %}
  <div class="contact-form-wrapper">
    <h2 class="contact-form-title">{{ form.title }}</h2>
    <form
      class="contact-form"
      action="{% if form.action %}{{ form.action }}{% else %}mailto:{{ site.email }}{% endif %}"
      method="POST"
      {% unless form.action %}enctype="text/plain"{% endunless %}
    >
      <div class="form-row">
        <div class="form-group">
          <label for="contact-name" class="sr-only">{{ form.name_placeholder }}</label>
          <input type="text" id="contact-name" name="name" placeholder="{{ form.name_placeholder }}" required>
        </div>
        <div class="form-group">
          <label for="contact-email" class="sr-only">{{ form.email_placeholder }}</label>
          <input type="email" id="contact-email" name="email" placeholder="{{ form.email_placeholder }}" required>
        </div>
      </div>
      <div class="form-group">
        <label for="contact-message" class="sr-only">{{ form.message_placeholder }}</label>
        <textarea id="contact-message" name="message" rows="5" placeholder="{{ form.message_placeholder }}" required></textarea>
      </div>
      <button type="submit" class="btn btn-secondary">{{ form.button_text }}</button>
    </form>
  </div>
  {% endif %}

  {% if site.contact.faq.enabled and site.contact.faq.items %}
  <div class="contact-faq">
    <h2 class="contact-faq-title">Frequently asked</h2>
    {% for item in site.contact.faq.items %}
    <details class="faq-item">
      <summary class="faq-question">{{ item.question }}</summary>
      <div class="faq-answer">{{ item.answer }}</div>
    </details>
    {% endfor %}
  </div>
  {% endif %}
</section>
