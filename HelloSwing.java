// Program to create a simple JFrame with a JLabel
import javax.swing.*;

class HelloSwing extends JFrame {
    // Constructor
    HelloSwing() {
        // Set title of the frame
        setTitle("Hello Swing");

        // Create label
        JLabel label = new JLabel("Welcome to Java Swing!", JLabel.CENTER);

        // Add label to frame
        add(label);

        // Frame settings
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        new HelloSwing();
    }
}
