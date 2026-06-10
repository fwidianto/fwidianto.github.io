async function loadMarketData() {

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbycHv4JGYZEubH0poM1LqqLDs6aWXRGleXu8LhmR9ooHEWAduXXAonKH19u805KjYOC/exec"
  );

  const result = await response.json();

  const data = result.table;

document.getElementById("lastUpdated").innerHTML =
  `Last Updated: ${result.lastUpdate}`;
  
  document.getElementById(
    "aiSummary"
  ).innerText = result.summary;

  const table =
    document.getElementById(
      "marketTable"
    );

  let html = `
    <tr>
      <th>Asset</th>
      <th>Direction</th>
      <th>Conviction</th>
      <th>Trigger</th>
      <th>Next Event</th>
      <th>Notes</th>
    </tr>
  `;

  for(let i = 1; i < data.length; i++){

    const row = data[i];

    if(!row[0]) continue;

    html += `
      <tr>
        <td>${row[0]}</td>
        <td>${row[3]}</td>
        <td>${row[4]}</td>
        <td>${row[5]}</td>
        <td>${row[6]}</td>
        <td>${row[7]}</td>
      </tr>
    `;
  }

  table.innerHTML = html;
}

async function loadAllocationData() {

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbycHv4JGYZEubH0poM1LqqLDs6aWXRGleXu8LhmR9ooHEWAduXXAonKH19u805KjYOC/exec"
  );

  const result = await response.json();

  const allocation = result.allocation;
  const allocationSummary = result.allocationSummary;

  const container =
    document.getElementById(
      "allocationContainer"
    );

  const grouped = {};

  for(let i = 1; i < allocation.length; i++){

    const row = allocation[i];

    const profile = row[0];
    const asset = row[1];
    const value = Number(row[2]) * 100;

    if(!grouped[profile]){
      grouped[profile] = [];
    }

    grouped[profile].push({
      asset,
      value
    });

  }

  const commentaryMap = {};

  for(let i = 1; i < allocationSummary.length; i++){

    commentaryMap[
      allocationSummary[i][0]
    ] = allocationSummary[i][1];

  }

  let html = "";

  Object.keys(grouped).forEach(profile => {

    const chartId =
      `chart-${profile.toLowerCase().trim()}`;

    let tableRows = "";

    grouped[profile].forEach(item => {

      tableRows += `
        <tr>
          <td>${item.asset}</td>
          <td>${item.value.toFixed(0)}%</td>
        </tr>
      `;

    });

    html += `
      <div class="allocation-card">

        <h3 class="strategy-title">
          ${profile}
        </h3>

        <div class="allocation-grid">

          <div class="chart-wrapper">
            <canvas id="${chartId}"></canvas>
          </div>

          <div>

            <table class="allocation-table">
              ${tableRows}
            </table>

            <p class="strategy-commentary">
              ${commentaryMap[profile] || ""}
            </p>

          </div>

        </div>

      </div>
    `;

  });

  container.innerHTML = html;

  requestAnimationFrame(() => {

    Object.keys(grouped).forEach(profile => {

      const chartId =
        `chart-${profile.toLowerCase().trim()}`;

      const canvas =
        document.getElementById(chartId);

      if(!canvas) return;

      new Chart(canvas, {

        type: "doughnut",

        data: {

          labels:
            grouped[profile]
              .map(x => x.asset),

          datasets: [{

            data:
              grouped[profile]
                .map(x => x.value),

            backgroundColor: [
              "#3b82f6",
              "#06b6d4",
              "#10b981",
              "#f59e0b",
              "#ef4444",
              "#8b5cf6"
            ],

            borderWidth: 0

          }]

        },

       options: {

  responsive: true,
  maintainAspectRatio: false,

  plugins: {

    legend: {

      position: "bottom",

      labels: {
        color: "#f3f4f6"
      }

    },

    tooltip: {

      callbacks: {

        label: function(context) {

          return `${context.label}: ${context.raw}%`;

        }

      }

    }

  }

}

      });

    });

  });

}

async function loadCentralBankData(){

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbycHv4JGYZEubH0poM1LqqLDs6aWXRGleXu8LhmR9ooHEWAduXXAonKH19u805KjYOC/exec"
  );

  const result =
    await response.json();

  const macroData =
    result.macroData;

  const container =
    document.getElementById(
      "centralBankContainer"
    );

  let html = "";

  macroData.forEach(row => {

    const name = row[0];
    const value = row[1];

    html += `

      <div class="central-bank-card">

        <div class="central-bank-name">
          ${name}
        </div>

        <div class="central-bank-rate">
          ${value}
        </div>

        <div class="central-bank-rate-label">
          Current Rate
        </div>

      </div>

    `;

  });

  container.innerHTML = html;

}
async function loadNewsData(){

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbycHv4JGYZEubH0poM1LqqLDs6aWXRGleXu8LhmR9ooHEWAduXXAonKH19u805KjYOC/exec"
  );

  const result =
    await response.json();

const news = result.news
  .slice(1)
  .sort(
    (a,b) =>
      new Date(b[0]) - new Date(a[0])
  );

  const container =
    document.getElementById(
      "newsContainer"
    );

let html = '<div class="news-grid">';

for(let i = 1; i < Math.min(news.length,31); i++){

  const row = news[i];

  const newsDate = new Date(row[0]);

  const formattedDate =
  newsDate.toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );

  html += `

    <a
      href="${row[5]}"
      target="_blank"
      class="news-card"
    >

      <div class="news-badge">
        ${row[2]}
      </div>

      <div class="news-title">
        ${row[3]}
      </div>

      <div class="news-meta">
        ${row[4]} • ${formattedDate}
      </div>

    </a>

  `;
}

html += '</div>';

  container.innerHTML = html;

}

loadMarketData();
loadAllocationData();
loadCentralBankData();
loadNewsData();


