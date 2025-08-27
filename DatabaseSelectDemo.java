// Program to connect MySQL database and execute SELECT query
import java.sql.*;

class DatabaseSelectDemo {
    public static void main(String[] args) {
        // Change these values as per your system
        String url = "jdbc:mysql://localhost:3306/testdb"; 
        String user = "root";    
        String password = "password"; 

        try {
            // 1. Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Establish Connection
            Connection con = DriverManager.getConnection(url, user, password);

            // 3. Create Statement
            Statement stmt = con.createStatement();

            // 4. Execute Query
            String query = "SELECT id, name FROM students";
            ResultSet rs = stmt.executeQuery(query);

            // 5. Print results
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("ID: " + id + ", Name: " + name);
            }

            // 6. Close connection
            con.close();

        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }
}
