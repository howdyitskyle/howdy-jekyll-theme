---
layout: home
---

<section class="two-column">
  <div class="left-section">
    <div class="left-container">
      <div class="image-wrapper">
        <div class="hero-content">
          <img src="{{ site.about_hero_image | default: '/assets/illustrations/designer.svg' | relative_url }}" alt="About hero" class="hero-image">
          <div class="logo-overlay">{% include logo.html %}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="right-section">
    <div class="content-wrapper">
      {% include navigation.html %}

      <div class="content-area">
        {% if site.about_headline %}
        <h1>{{ site.about_headline }}</h1>
        {% endif %}

        <p class="body-large about-intro">
          {{ site.about_bio }}
        </p>

        {% if site.about_paragraph_2 %}
        <p class="about-body">
          {{ site.about_paragraph_2 }}
        </p>
        {% endif %}

        {% if site.about_paragraph_3 %}
        <p class="about-body-muted">
          {{ site.about_paragraph_3 }}
        </p>
        {% endif %}

        {% if site.about_resume.enabled != false %}
        <div class="about-resume-wrapper">
          <a href="{{ site.about_resume.url | default: '/assets/resume.pdf' | relative_url }}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">{{ site.about_resume.text | default: "Download Resume" }}</a>
        </div>
        {% endif %}

        {% if site.testimonials %}
        <div class="about-testimonials">
          <h2 class="about-testimonials-heading">What people say</h2>
          {% for t in site.testimonials %}
          <blockquote class="about-testimonial">
            <p class="about-testimonial-quote">&ldquo;{{ t.quote }}&rdquo;</p>
            <footer class="about-testimonial-attribution">&mdash; {{ t.name }}, <cite>{{ t.role }}</cite></footer>
          </blockquote>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
  </div>
</section>
