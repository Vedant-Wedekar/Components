import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class FormServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String name = request.getParameter("username");
        String age = request.getParameter("age");
        out.println("<html><body>");
        out.println("<h2>User Details Received</h2>");
        out.println("Name: " + name + "<br>");
        out.println("Age: " + age + "<br>");
        out.println("</body></html>");
        out.close();
    }
}
