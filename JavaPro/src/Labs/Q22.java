package Labs;

class Q2 {
    private int studentId;
    private String studentName;
    private String city;
    private int marks1;
    private int marks2;
    private int marks3;
    private float feePerMonth;
    private boolean isEligibleForScholarship;
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    public String getStudentName() {
        return studentName;
    }
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public int getMarks1() {
        return marks1;
    }
    public void setMarks1(int marks1) {
        this.marks1 = marks1;
    }
    public int getMarks2() {
        return marks2;
    }
    public void setMarks2(int marks2) {
        this.marks2 = marks2;
    }
    public int getMarks3() {
        return marks3;
    }
    public void setMarks3(int marks3) {
        this.marks3 = marks3;
    }
    public float getFeePerMonth() {
        return feePerMonth;
    }
    public void setFeePerMonth(float feePerMonth) {
        this.feePerMonth = feePerMonth;
    }
    public boolean isEligibleForScholarship() {
        return isEligibleForScholarship;
    }
    public void setEligibleForScholarship(boolean isEligibleForScholarship) {
        this.isEligibleForScholarship = isEligibleForScholarship;
    }
    public float getAnualFee() {
        return feePerMonth * 12;
    }
    public int getTotalMarks() {
        return marks1 + marks2 + marks3;
    }
    public float getAverage() {
        return (marks1 + marks2 + marks3) / 3.0f;
    }
    public String getResult() {
        if (marks1 > 60 && marks2 > 60 && marks3 > 60) {
            return "pass";
        }
        else
        {
            return "fail";
        }
    }}
//TestMain is Asgn12
public class Q22  {
    public static void main(String[] args) {
        Q2 student1 = new Q2();
        student1.setStudentName("John");
        student1.setMarks1(70);
        student1.setMarks2(80);
        student1.setMarks3(90);
        student1.setFeePerMonth(2000);
        student1.setEligibleForScholarship(true);
        Q2 student2 = new Q2();
        student2.setStudentName("Alice");
        student2.setMarks1(50);
        student2.setMarks2(60);
        student2.setMarks3(55);
        student2.setFeePerMonth(1500);
        student2.setEligibleForScholarship(false);
        Q2 student3 = new Q2();
        student3.setStudentName("Bob");
        student3.setMarks1(85);
        student3.setMarks2(75);
        student3.setMarks3(65);
        student3.setFeePerMonth(1800);
        student3.setEligibleForScholarship(true);
        Q2 highestMarkStudent = student1;
        if (student2.getTotalMarks() > highestMarkStudent.getTotalMarks()) {
            highestMarkStudent = student2;
        }
        if (student3.getTotalMarks() > highestMarkStudent.getTotalMarks()) {
            highestMarkStudent = student3;
        }
        System.out.println("Student with the highest total marks: " + highestMarkStudent.getStudentName());
        Q2 leastFeeStudent = student1;
        if (student2.getFeePerMonth() < leastFeeStudent.getFeePerMonth()) {
            leastFeeStudent = student2;
        }
        if (student3.getFeePerMonth() < leastFeeStudent.getFeePerMonth()) {
            leastFeeStudent = student3;
        }
        System.out.println("Student with the least monthly fee: " + leastFeeStudent.getStudentName() + ", Fee: " + leastFeeStudent.getFeePerMonth());
        printStudentDetails(student1);
        printStudentDetails(student2);
        printStudentDetails(student3);
    }
    public static void printStudentDetails(Q2 student) {
        System.out.println("Student Name: " + student.getStudentName());
        System.out.println("Total Marks: " + student.getTotalMarks());
        System.out.println("Average Marks: " + student.getAverage());
        System.out.println("Result: " + student.getResult());
        System.out.println("Scholarship: " + (student.isEligibleForScholarship() ? "Scholarship available" : "Scholarship not available"));
        System.out.println("----------------------------");
    }
}