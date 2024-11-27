package Funda;

import java.sql.Date;

class Issue {
    int id;
    String title;
    String description;
    String[] priority;
    String[] status;
    String assignee;
    Date date;

    Issue() {
        id = 1;
        title = "first-issue-1";
        description = "Laptop Slow";
        priority = new String[] {"High", "Low"};
        status = new String[] {"Open", "Closed"};
        assignee = "Rajat";
        date = Date.valueOf("2024-11-19");

    }


    @Override
    public String toString() {

        String output = "Id:" + id + "\nTitle:" + title + "\nDescription:" + description +
                "\nPriority:" + priority[0] + "\nStatus:" + status[0] +
                "\nAssignee:" + assignee + "\nDate:" + date;
        return output;
    }
}

public class IssueObject {
    public static void main(String[] args) {
        Issue issue = new Issue();
        System.out.println(issue.toString());
    }
}

