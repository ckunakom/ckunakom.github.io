// --- Project Items --- //
var analystContent = [
  {
    title: "DIY: Spotify Wrapped",
    url: "https://ckunakom.github.io/diy-spotify-wrapped/",
    src: "img/spotify.PNG",
    alt: "spotify",
    description:
      "Recreating Spotify End of Year Wrapped Dashboard with data extractaction from Spotify Web API using python, transformation using pandas module and loading it into BI tool for dashboard and storyboard (Tableau).",
    side: "left",
  },
  {
    title: "Data Visualization: Smule App Data",
    url: "https://ckunakom.github.io/smule-data-visual",
    src: "img/data-visual.png",
    alt: "data-visual",
    description:
      "Analysis and visualization created from Tableau, using a more elaborated data extracted from Smule app.",
    side: "right",
  },
  {
    title: "Clinical Data Management: eCRF & Edit Checks",
    url: "https://ckunakom.github.io/CRF_edit_checks/",
    src: "img/ec_crf1.PNG",
    alt: "crf_ec",
    description:
      "Programmed edit checks on eCRF using javaScript to eliminate manual data review and data cleaning.",
    side: "left",
  },
  {
    title: "Data Mining: Smule App Data",
    url: "https://ckunakom.github.io/my_smule_record/",
    src: "img/data-mining.png",
    alt: "data-mining",
    description:
      "My very first project after graduating from the bootcamp back in 2020. Mining raw data from Smule app in JSON format with API-like request and turn it into csv file using Python.",
    side: "right",
  },
];

var mainProjectDom = "";

for (var i = 0; i < analystContent.length; i++) {
  const { title, url, src, alt, description, side } = analystContent[i];

  if (side == "left") {
    mainProjectDom += `
            <div class="row pb-3 project-cards">
                <div class='col-sm-6 col-xs-12'>
                    <a class="project-card" href="${url}" target="_blank">
                    <div class="card" id="imgbox-focus">
                        <img class="card-img-top" src="${src}" alt="${alt}">
                    <div class="card-body">
                        <h4 class="card-title text-primary">${title}</h4>
                        <p class="card-text" id="describe">${description}</p>
                    </div>
                    </div>
                    </a>
                </div>
        `;
  } else {
    mainProjectDom += `
            <div class='col-sm-6 col-xs-12'>
                <a class="project-card" href="${url}" target="_blank">
                <div class="card" id="imgbox-focus">
                    <img class="card-img-top" src="${src}" alt="${alt}">
                <div class="card-body">
                    <h4 class="card-title text-primary">${title}</h4>
                    <p class="card-text">${description}</p>
                </div>
                </div>
                </a>
            </div>
        </div>
    `;
  }
}

document.getElementById("main-project-dom").innerHTML = mainProjectDom;
