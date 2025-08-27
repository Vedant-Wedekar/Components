// Program to demonstrate JButton and JLabel in Swing
import javax.swing.*;
import java.awt.event.*;

class ButtonExample extends JFrame {
    JButton button;
    JLabel label;

    // Constructor
    ButtonExample() {
        // Create components
        button = new JButton("Click Me");
        label = new JLabel("Waiting for click...");

        // Set layout
        setLayout(null);

        // Set positions
        button.setBounds(100, 100, 120, 40);
        label.setBounds(100, 160, 200, 30);

        // Add ActionListener to button
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                label.setText("Button Clicked!");
            }
        });

        // Add components to frame
        add(button);
        add(label);

        // Frame settings
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        new ButtonExample();
    }
}
