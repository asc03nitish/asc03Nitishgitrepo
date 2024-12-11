package Funda;
import java.util.*;
import java.sql.Date;

class Issue1{
    int id;
    String title;
    String description;
    String priority;
    String status;
    String assignee;
    Date date;

    Issue1(int id, String title, String description, String priority, String status, String assignee,Date date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.assignee = assignee;
        this.date = date;
    }
    @Override
    public String toString(){
        return "Id:"+id+"\nTitle:"+title+"\nDescription:"+description+"\nPriority:"+priority+"\nStatus:"+status+"\nAssignee:"+assignee+"\nDate:"+date;
    }
}

public class IssueObject1 {
    static Map<Integer, Issue1> issues = new HashMap<>();

    public static void main(String[] args) {

        issues.put(1, new Issue1(1, "title-1", "Desc-1", "Low", "In-Progess", "Rajat", Date.valueOf("2024-11-19")));
        issues.put(2, new Issue1(2, "title-2", "Desc-2", "High", "Completed", "Rataj", Date.valueOf("2024-11-18")));

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter issue ID to search: ");
        int id = scanner.nextInt();

        Issue1 result = searchById(id);
        if (result != null) {
            System.out.println("Found issue:\n" + result);
        } else {
            System.out.println("Issue not found.");
        }
        scanner.close();
    }

    public static Issue1 searchById(int id) {
        return issues.get(id);
    }
}
