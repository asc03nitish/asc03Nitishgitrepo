package jdbc;

import java.sql.*;
import java.sql.DriverManager;

public class JDBCSelect {
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila", "root", "mysql");
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("select * from actor");
            while(resultSet.next()) {
                System.out.println(resultSet.getInt(1) + "\t" + resultSet.getString(2) + "\t" + resultSet.getString("last_name"));

            }
        }
        catch(Exception e){
//            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }
}
