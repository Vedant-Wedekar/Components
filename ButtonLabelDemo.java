// Swing program with JButton and JLabel (Event Listener Example)
import javax.swing.*;
import java.awt.event.*;

class ButtonLabelDemo extends JFrame {
    JButton button;
    JLabel label;

    ButtonLabelDemo() {
        // Create components
        button = new JButton("Click Me");
        label = new JLabel("Before Click", JLabel.CENTER);

        // Set layout
        setLayout(null);

        // Set positions
        button.setBounds(100, 100, 120, 40);
        label.setBounds(80, 160, 200, 30);

        // Add ActionListener to button
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                label.setText("After Click - Text Changed!");
            }
        });

        // Add components
        add(button);
        add(label);

        // Frame settings
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        new ButtonLabelDemo();
    }
}
