 // DOM Elements
const calculateBtn = document.getElementById('calculateBtn');
const resultsDiv = document.getElementById('results');
const totalMarksEl = document.getElementById('totalMarks');
const averageMarksEl = document.getElementById('averageMarks');
const gradeEl = document.getElementById('grade');

// Function to calculate average of marks
function calculateAverage(marks) {
  const sum = marks.reduce((total, mark) => total + mark, 0);
  return sum / marks.length;
}

// Function to assign grade based on average
function assignGrade(average) {
  if (average >= 90) return { grade: 'A', className: 'grade-A' };
  if (average >= 80) return { grade: 'B', className: 'grade-B' };
  if (average >= 70) return { grade: 'C', className: 'grade-C' };
  return { grade: 'F', className: 'grade-F' };
}

// Function to validate marks
function validateMarks(marks) {
  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert(`Please enter a valid mark between 0 and 100 for Subject ${i + 1}`);
      document.getElementById(`subject${i + 1}`).focus();
      return false;
    }
  }
  return true;
}

// Event listener for calculate button
calculateBtn.addEventListener('click', function() {
  // Get marks from input fields
  const marks = [];
  for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`subject${i}`);
    marks.push(Number(input.value));
  }

  // Validate marks
  if (!validateMarks(marks)) {
    return;
  }

  // Calculate total marks
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

  // Calculate average
  const average = calculateAverage(marks);

  // Assign grade
  const gradeInfo = assignGrade(average);

  // Display results
  totalMarksEl.textContent = `${totalMarks} / 500`;
  averageMarksEl.textContent = `${average.toFixed(2)}%`;
  
  gradeEl.textContent = gradeInfo.grade;
  gradeEl.className = `result-value ${gradeInfo.className}`;
  
  // Show results section
  resultsDiv.style.display = 'block';

  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth' });
});

// Real-time input validation to keep values between 0 and 100
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('input', function() {
    if (this.value < 0) this.value = 0;
    if (this.value > 100) this.value = 100;
  });
});