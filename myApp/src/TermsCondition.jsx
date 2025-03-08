import React from 'react';
import './TermsCondition.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Terms and Conditions</h1>
      </header>

      <div className="terms-content">
        <ol>
          <li>You must provide accurate and complete information during registration.</li>
          <li>The platform reserves the right to suspend or terminate accounts that provide false or misleading information.</li>
          <li>You must not engage in any illegal, fraudulent, or harmful activities using the platform.</li>
          <li>You are responsible for ensuring a safe and respectful interaction with service providers.</li>
          <li>Payments must be made through the approved methods provided in the app.</li>
          <li>Bookings are subject to availability.</li>
          <li>Users must treat service providers with respect and dignity.</li>
          <li>Harassment, discrimination, or any form of abuse will result in account suspension or legal action.</li>
          <li>Users must not request services that violate the law or ethical guidelines.</li>
          <li>Users should report any suspicious or harmful activity immediately.</li>
          <li>The platform is not liable for any damage, injury, or loss arising from the use of services.</li>
          <li>The platform conducts background checks on service providers but does not guarantee their character or behavior.</li>
          <li>The platform reserves the right to terminate accounts that violate these terms.</li>
          <li>User data is collected, stored, and processed as per our Privacy Policy.</li>
          <li>Users can request account deletion by contacting customer support.</li>
          <li>The platform may update these Terms and Conditions at any time.</li>
          <li>Users will be notified of significant changes and must accept the new terms to continue using the service.</li>
          <li>In case of disputes, users should first contact customer support.</li>
          <li>If unresolved, disputes will be handled as per the governing law of Nepal.</li>
        </ol>

        <div className="agreement">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to all the conditions</label>
        </div>
      </div>
    </div>
  );
}

export default App;