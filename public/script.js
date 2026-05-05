console.log("JS is working")

document.querySelector("#resultForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    console.log("Script is loaded successfully")

    const seat = document.querySelector("#seat").value.trim()
    const mname = document.querySelector("#mname").value.trim()

    try {
        const response = await fetch('http://127.0.0.1:11400/students/result', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ seat, mname })
        })

        const data = await response.json()

        if (!response.ok) {
            console.log("Error:", data.message)
            return
        }

        console.log(data)


        // Show result on UI
        let subjectsHTML = data.data.subjects.map(sub => `
  <tr>
    <td>${sub.code}</td>
    <td>${sub.name}</td>
    <td>${sub.marks}</td>
  </tr>
`).join('');

const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);

document.querySelector("#result").innerHTML = `
  <div class="marksheet">

  <div class="logo-container">
      <img src="./MHlogo.png" alt="MSBSHSE Logo" class="board-logo">
    </div>
    
    <h2 class="board-title">
      MAHARASHTRA STATE BOARD OF SECONDARY AND HIGHER SECONDARY EDUCATION, PUNE
    </h2>
    
    <h3 class="exam-title">SSC Examination RESULT</h3>

    <div class="info">
      <p><b>NAME:</b> ${data.data.name}</p>
      <p><b>MOTHER:</b> ${data.data.mname}</p>
      <p><b>SEAT NO:</b> ${data.data.seat}</p>
      <p><b>DIVISION:</b> ${data.data.division || "A"}</p>
    </div>

    <table>
      <tr>
        <th>SUBJECT CODE</th>
        <th>SUBJECT NAME</th>
        <th>MARKS OBTAINED</th>
      </tr>
      ${subjectsHTML}
    </table>

    <div class="summary">
      <p><b>TOTAL:</b> ${data.data.total} / 500</p>
      <p><b>PERCENTAGE:</b> ${data.data.percentage}%</p>
      <p><b>RESULT:</b> ${data.data.status}</p>
    </div>

  </div>
`;
    } catch (err) {
        console.error("Error:", err)
    }
})