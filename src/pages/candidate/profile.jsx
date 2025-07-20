import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    fname: 'John',
    lname: 'Doe',
    phone: '9876543210',
    birthdate: '1990-01-01',
    address1: '123 Street',
    address2: 'Suite 456',
    state: 'Gujarat',
    country: 'India'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // You can add actual save logic here (API call etc.)
  };

  return (
    <div className="container mb-4">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="h2 mb-0">Account</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card profile-card">
            <div className="card-header">
              <h3 className="mb-0">Profile Details</h3>
              <p className="mb-0">You have full control to manage your own account setting.</p>
            </div>

            <div className="card-body">
              <div className="profile-avatar-section">
                <div className="avatar-container">
                  <img
                    src="../assets/images/avatar/avatar-1.jpg"
                    alt="avatar"
                    className="avatar-image"
                  />
                  <div className="ms-3">
                    <h4 className="mb-0">Your avatar</h4>
                    <p className="mb-0">PNG or JPG no bigger than 800px wide and tall.</p>
                  </div>
                </div>
                <div className="button-group">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel' : 'Update'}
                  </button>
                  <button className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
              </div>

              <hr className="my-5" />

              <div>
                <h4 className="mb-0">Personal Details</h4>
                <p className="mb-4">Edit your personal information and address.</p>

                {isEditing ? (
                  <form className="row gx-3 needs-validation" onSubmit={handleSubmit}>
                    {[
                      ['fname', 'First Name'],
                      ['lname', 'Last Name'],
                      ['phone', 'Phone'],
                      ['birthdate', 'Birthday'],
                      ['address1', 'Address Line 1'],
                      ['address2', 'Address Line 2'],
                    ].map(([id, label]) => (
                      <div key={id} className="mb-3 col-12 col-md-6">
                        <label htmlFor={id} className="form-label">{label}</label>
                        <input
                          type={id === 'birthdate' ? 'date' : 'text'}
                          className="form-control"
                          id={id}
                          value={profileData[id]}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    ))}

                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="state" className="form-label">State</label>
                      <select className="form-select" id="state" value={profileData.state} onChange={handleChange} required>
                        <option value="">Select State</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Rajasthan">Rajasthan</option>
                      </select>
                    </div>

                    <div className="mb-3 col-12 col-md-6 ">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select className="form-select" id="country" value={profileData.country} onChange={handleChange} required>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">Update Profile</button>
                    </div>
                  </form>
                ) : (
                  <div className="row gx-3">
                    {Object.entries(profileData).map(([key, value]) => (
                      <div key={key} className="mb-3 col-12 col-md-6 ">
                        <strong className="form-label d-block text-capitalize">{key.replace(/(\d)/g, ' $1')}</strong>
                        <div className="h_cl">{value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
