// pages/api/buttonClick.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the button click event
      console.log('Button clicked!');
      res.status(200).json({ message: 'Button clicked!' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  