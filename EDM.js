const root = document.getElementById("root");
root.style.minHeight = "100vh";
root.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
root.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.alignItems = 'center';
root.style.justifyContent = 'center';


const card = document.createElement('div');
card.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
card.style.backdropFilter = 'blur(10px)';
card.style.borderRadius = '20px';
card.style.padding = '40px';
card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
card.style.border = '1px solid rgba(255, 255, 255, 0.18)';
card.style.width = '90%';
card.style.maxWidth = '800px';
root.appendChild(card);

const h = document.createElement("h1");
h.textContent = "Employees Manager";
h.style.color = "white";
h.style.fontSize = "70px";
h.style.mrgin = "10px";
h.style.fontWeight = "bold";
h.style.textAlign = "center";
card.appendChild(h);

//btn container:
const btnContainer = document.createElement("div");
btnContainer.style.display = "flex";
btnContainer.style.justifyContent = "center";
btnContainer.style.alignItems = "center";
btnContainer.style.gap = "12px"; 
card.appendChild(btnContainer);


// Buttons
const btnNames = document.createElement("button");
btnNames.textContent = "Show Names";
btnNames.style.width = "100px";
btnNames.style.height = "60px";
btnNames.style.border = "solid";
btnNames.style.borderRadius = "18px";
btnNames.style.borderColor = "black";

const btnFilter = document.createElement("button");
btnFilter.style.width = "100px";
btnFilter.style.height = "60px";
btnFilter.style.border = "solid";
btnFilter.style.borderRadius = "18px";
btnFilter.style.borderColor = "black";
btnFilter.textContent = "Salary > 40,000";

const btnTotal = document.createElement("button");
btnTotal.style.width = "100px";
btnTotal.style.height = "60px";
btnTotal.style.border = "solid";
btnTotal.style.borderRadius = "18px";
btnTotal.style.borderColor = "black";
btnTotal.textContent = "Total Salary Expense";

btnContainer.appendChild(btnNames);
btnContainer.appendChild(btnFilter);
btnContainer.appendChild(btnTotal);

// Results container
const results = document.createElement("div");
results.style.marginTop = "20px";
results.style.borderRadius = '20px';
results.style.padding = '40px';
results.style.width = '90%';
results.style.maxWidth = '800px';
results.style.textAlign = "center";
card.appendChild(results);

// Employees array
const employees = [
  { name: "Sophia Martinez", age: 32, salary: 45000 },
  { name: "James Wilson", age: 28, salary: 52000 },
  { name: "Emma Thompson", age: 45, salary: 38000 },
  { name: "Michael Chen", age: 29, salary: 61000 },
  { name: "Olivia Davis", age: 35, salary: 49000 }
];

// 1. Show names (map + arrow function)
const showNames = () => {
  results.innerHTML = "<h3>Employee Names</h3>";
  results.innerHTML += employees.map(e => `<p>${e.name}</p>`).join("");
};

// 2. Filter salary > 40k (filter + destructuring + arrow function)
const filterSalary = () => {
  results.innerHTML = "<h3>High Earners</h3>";
  const highEarners = employees.filter(e => e.salary > 40000);

  if (highEarners.length === 0) {
    results.innerHTML += "<p>No employees found.</p>";
  } else {
    highEarners.forEach(({ name, age, salary }) => {
      results.innerHTML += `<p>${name} (Age: ${age}) - rs${salary}</p>`;
    });
  }
};

// 3. Total salary (reduce + arrow function)
const totalSalary = () => {
  const total = employees.reduce((sum, e) => sum + e.salary, 0);
  results.innerHTML = `<h3>Total Salary Expense</h3><p>rs${total}</p>`;
};

// Button events
btnNames.addEventListener("click", showNames);
btnFilter.addEventListener("click", filterSalary);
btnTotal.addEventListener("click", totalSalary);
