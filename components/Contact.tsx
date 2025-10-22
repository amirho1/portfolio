import { MAIL } from "@/lib/constant";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-black [&>*]:text-white">
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>

          <p className="max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Feel free to
            reach out if you'd like to collaborate or just say hello!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`mailto:${MAIL}`}>
              <Button variant="secondary">
                <Mail className="w-4 h-4 mr-2" />
                {MAIL}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
