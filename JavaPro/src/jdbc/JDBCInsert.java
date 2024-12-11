package jdbc;

import java.sql.*;

public class JDBCInsert {
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila", "root", "mysql");
            Statement statement = connection.createStatement();
            int numOfRowsAffected = statement.executeUpdate("INSERT INTO USER VALUES(1,'n@com','JANE','DOEY')");
            if(numOfRowsAffected>0){
                System.out.println("Successfully Inserted");
            }
            else{
                System.out.println("Not Successfully");
            }


        }
        catch (SQLException se){
            se.printStackTrace();
        }
    }
}
