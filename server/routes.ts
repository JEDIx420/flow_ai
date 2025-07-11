import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API route
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email } = insertWaitlistSchema.parse(req.body);
      const waitlistEntry = await storage.addToWaitlist(email);
      res.json({ ok: true, id: waitlistEntry.id });
    } catch (error: any) {
      if (error.code === '23505') { // Unique constraint violation
        res.status(400).json({ ok: false, error: "Email already registered" });
      } else {
        res.status(400).json({ ok: false, error: "Invalid email" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
