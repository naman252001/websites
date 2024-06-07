document.getElementById('marks-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    
    const gpa = ((subject1 + subject2 + subject3 + subject4)/ 4).toFixed(2);
    const total_marks= (subject1 + subject2 + subject3 + subject4)
    
    document.getElementById('mark1').textContent = subject1;
    document.getElementById('mark2').textContent = subject2;
    document.getElementById('mark3').textContent = subject3;
    document.getElementById('mark4').textContent = subject4;
    document.getElementById('gpa').textContent = gpa;
    document.getElementById('Total_marks').textContent = total_marks;

    
    document.getElementById('marks-form').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});
