---
layout: default
title: Posts
description: Posts list
categories:
---

<ul>
  <div  class="post_list">
    {% for post in site.posts %}
      <a href="{{ post.url }}">
        <li class="waves post_list_item">
          <h1>{{forloop.index}}. {{ post.title }}</h1>
          <h4>{{ post.date | date: '%Y-%m-%d' }}</h4>
          <h4>{{post.description}}</h4>
          <!-- <p><i>{{ post.excerpt }}</i></p> -->
        </li>
      </a>
    {% endfor %}
  </div>
</ul>
