// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-released-vibronrotor-an-open-source-finite-element-rotordynamic-code-for-flexible-rotor-bearing-systems",
          title: 'Released VibronRotor: An open-source finite-element rotordynamic code for flexible rotor-bearing systems',
          description: "",
          section: "News",},{id: "news-our-paper-vibronrotor-an-open-source-rotordynamic-code-development-and-benchmarking-was-published-in-measurement",
          title: 'Our paper “VibronRotor, an open-source rotordynamic code: Development and benchmarking” was published in...',
          description: "",
          section: "News",},{id: "news-completed-my-ms-in-mechatronics-engineering-at-sabanci-university-with-a-thesis-on-the-design-of-active-magnetic-bearing-spindles-for-micro-milling",
          title: 'Completed my MS in Mechatronics Engineering at Sabanci University, with a thesis on...',
          description: "",
          section: "News",},{id: "news-presented-our-work-design-of-an-active-magnetic-bearing-spindle-for-micro-milling-applications-at-the-19th-international-conference-on-machine-design-and-production-turkiye",
          title: 'Presented our work “Design of an Active Magnetic Bearing Spindle for Micro-Milling Applications”...',
          description: "",
          section: "News",},{id: "news-our-paper-integrated-design-optimization-of-a-motorized-active-magnetic-bearing-spindle-for-micro-milling-applications-has-been-published-in-the-journal-of-mechanical-science-and-technology",
          title: 'Our paper “Integrated Design Optimization of a Motorized Active Magnetic Bearing Spindle for...',
          description: "",
          section: "News",},{id: "news-our-preprint-design-framework-and-manufacturing-of-an-active-magnetic-bearing-spindle-for-micro-milling-applications-is-up-on-arxiv",
          title: 'Our preprint “Design Framework and Manufacturing of an Active Magnetic Bearing Spindle for...',
          description: "",
          section: "News",},{id: "news-open-sourced-dc-motor-control-test-rig-a-low-cost-rig-benchmarking-pi-pole-placement-lqr-and-observer-based-luenberger-kalman-lqg-control-on-a-geared-dc-motor",
          title: 'Open-sourced DC Motor Control Test Rig: A low-cost rig benchmarking PI, pole-placement, LQR,...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Kazi_Sher_Ahmed_CV.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NENv8hQAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Kazi-Sher", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kazisherahmed", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/KaziSherAhmed", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8688-9637", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%7A%69%73%68%65%72%61%68%6D%65%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },];
