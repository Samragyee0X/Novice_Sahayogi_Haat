import { useState } from "react";
import { Bell, Home, Search, Mic, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import styles from "./ServiceProviderDashboard.module.css";

export default function ServiceProviderDashboard() {
  const serviceRequests = [
    { name: "Hari", rating: 4.8, reviews: 2, price: 350 },
    { name: "Lalita", rating: 4.0, reviews: 5, price: 500 },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.menuButton}>☰</button>
        <h2 className={styles.title}>Service Provider Profile</h2>
        <Bell className={styles.notificationIcon} />
      </header>

      {/* Welcome Message */}
      <div className={styles.welcomeMessage}>
        Hey Jason, welcome back!! You’re logged in as an assistant helper.
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <h3 className={styles.sectionTitle}>Our Services</h3>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>📝</div>
            <p>Exam Assistance</p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>🤝</div>
            <p>Find Your Saathi</p>
          </div>
        </div>
      </div>

      {/* Service Request Alert */}
      <div className={styles.requestSection}>
        <h3 className={styles.sectionTitle}>Service Request Alert</h3>
        <div className={styles.requestContainer}>
          {serviceRequests.map((request, index) => (
            <Card key={index} className={styles.requestCard}>
              <CardContent className={styles.requestContent}>
                <div className={styles.avatar} />
                <h4 className={styles.requestName}>{request.name}</h4>
                <p className={styles.requestText}>Requesting Service</p>
                <p className={styles.rating}>⭐ {request.rating} ({request.reviews})</p>
                <p className={styles.price}>Rs.{request.price}</p>
                <Button className={styles.acceptButton}>Accept</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <Home className={styles.navIcon} />
        <Mic className={styles.navIcon} />
        <Search className={styles.navIcon} />
        <Bell className={styles.navIcon} />
        <User className={styles.navIcon} />
      </nav>
    </div>
  );
}
