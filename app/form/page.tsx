"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    // Company & Contact Information
    companyName: "",
    name: "",

    // Business Background
    businessDescription: "",
    missionStatement: "",
    productsServices: "",
    uniqueSellingProposition: "",

    // Current Online Presence
    hasWebsite: "",
    currentWebsiteUrl: "",
    currentWebsiteFeedback: "",
    socialMediaProfiles: "",

    // Project Goals & Objectives
    websitePurpose: "",
    specificGoals: "",
    currentProblems: "",

    // Target Audience
    targetAudience: "",
    painPoints: "",

    // Competitors & Inspiration
    competitors: "",
    inspirationWebsites: "",

    // Content & Features
    requiredPages: "",
    contentTypes: "",
    specificFeatures: "",

    // Branding & Design Preferences
    hasBranding: "",
    designPreferences: "",
    colorsToAvoid: "",

    // Technical & Logistical Details
    timeline: "",
    budget: "",
    multipleLanguages: "",

    // Additional Notes
    additionalNotes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="py-12 ">
      <div className="">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Website Project Questionnaire
          </h1>
          <p className="text-sm text-stone-600 max-w-lg">
            Help us understand your business and project requirements to create
            the perfect website for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company & Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Company & Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Business Background */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Business Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessDescription">
                  Business Description
                </Label>
                <Textarea
                  id="businessDescription"
                  placeholder="Put simply, what do you do?"
                  value={formData.businessDescription}
                  onChange={(e) =>
                    handleInputChange("businessDescription", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="missionStatement">
                  Mission Statement & Core Values (optional)
                </Label>
                <Textarea
                  id="missionStatement"
                  placeholder="What is your company's mission statement and core values?"
                  value={formData.missionStatement}
                  onChange={(e) =>
                    handleInputChange("missionStatement", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productsServices">Products or Services</Label>
                <Textarea
                  id="productsServices"
                  placeholder="What products or services do you offer?"
                  value={formData.productsServices}
                  onChange={(e) =>
                    handleInputChange("productsServices", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="uniqueSellingProposition">
                  Unique Selling Proposition
                </Label>
                <Textarea
                  id="uniqueSellingProposition"
                  placeholder="What sets your business apart from competitors?"
                  value={formData.uniqueSellingProposition}
                  onChange={(e) =>
                    handleInputChange(
                      "uniqueSellingProposition",
                      e.target.value
                    )
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Current Online Presence */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Current Website
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hasWebsite">
                  Do you currently have a website?
                </Label>
                <RadioGroup
                  value={formData.hasWebsite}
                  onValueChange={(value) =>
                    handleInputChange("hasWebsite", value)
                  }
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.hasWebsite === "yes" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="currentWebsiteUrl">
                      Current Website URL
                    </Label>
                    <Input
                      id="currentWebsiteUrl"
                      type="url"
                      placeholder="https://www.yourwebsite.com"
                      value={formData.currentWebsiteUrl}
                      onChange={(e) =>
                        handleInputChange("currentWebsiteUrl", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentWebsiteFeedback">
                      What do you like or dislike about your current website?
                    </Label>
                    <Textarea
                      id="currentWebsiteFeedback"
                      placeholder="Share your thoughts about your current website"
                      value={formData.currentWebsiteFeedback}
                      onChange={(e) =>
                        handleInputChange(
                          "currentWebsiteFeedback",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="socialMediaProfiles">
                  Social Media Profiles
                </Label>
                <Textarea
                  id="socialMediaProfiles"
                  placeholder="List any social media profiles or online platforms for your business"
                  value={formData.socialMediaProfiles}
                  onChange={(e) =>
                    handleInputChange("socialMediaProfiles", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Project Goals & Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Project Goals & Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="websitePurpose">Main Purpose of Website</Label>
                <Input
                  id="websitePurpose"
                  type="url"
                  placeholder="What is the main purpose of your website?"
                  value={formData.websitePurpose}
                  onChange={(e) =>
                    handleInputChange("websitePurpose", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specificGoals">Specific Goals</Label>
                <Textarea
                  id="specificGoals"
                  placeholder="What specific goals do you want the website to achieve?"
                  value={formData.specificGoals}
                  onChange={(e) =>
                    handleInputChange("specificGoals", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="targetAudience">
                  Ideal Customer/Target Audience
                </Label>
                <Textarea
                  id="targetAudience"
                  placeholder="Who is your ideal customer? Try to include demographics such as age, location, occupation, etc."
                  value={formData.targetAudience}
                  onChange={(e) =>
                    handleInputChange("targetAudience", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="painPoints">Main Pain Points or Needs</Label>
                <Textarea
                  id="painPoints"
                  placeholder="What are the main pain points or needs of your target audience?"
                  value={formData.painPoints}
                  onChange={(e) =>
                    handleInputChange("painPoints", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Competitors & Inspiration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Competitors & Inspiration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="competitors">Main Competitors</Label>
                <Textarea
                  id="competitors"
                  placeholder="Who are your main competitors?"
                  value={formData.competitors}
                  onChange={(e) =>
                    handleInputChange("competitors", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inspirationWebsites">
                  Inspiration Websites (optional)
                </Label>
                <Textarea
                  id="inspirationWebsites"
                  placeholder="Are there any websites you admire or want to use as inspiration? What do you like about them?"
                  value={formData.inspirationWebsites}
                  onChange={(e) =>
                    handleInputChange("inspirationWebsites", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Content & Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Content & Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="requiredPages">Required Pages</Label>
                <Textarea
                  id="requiredPages"
                  placeholder="What pages do you need on your website? (e.g., Home, About, Services, Contact, Blog, FAQ)"
                  value={formData.requiredPages}
                  onChange={(e) =>
                    handleInputChange("requiredPages", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contentTypes">Content Types</Label>
                <Textarea
                  id="contentTypes"
                  placeholder="What types of content will you provide? (text, images, videos, downloads)"
                  value={formData.contentTypes}
                  onChange={(e) =>
                    handleInputChange("contentTypes", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specificFeatures">
                  Specific Features Required
                </Label>
                <Textarea
                  id="specificFeatures"
                  placeholder="Are there any specific features or functionalities you need? (e.g., contact form, booking system, newsletter signup, analytics)"
                  value={formData.specificFeatures}
                  onChange={(e) =>
                    handleInputChange("specificFeatures", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Branding & Design Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Branding & Design Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hasBranding">
                  Do you have existing branding guidelines?
                </Label>
                <RadioGroup
                  value={formData.hasBranding}
                  onValueChange={(value) =>
                    handleInputChange("hasBranding", value)
                  }
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="designPreferences">Design Preferences</Label>
                <Textarea
                  id="designPreferences"
                  placeholder="Are there any design styles or color schemes you prefer?"
                  value={formData.designPreferences}
                  onChange={(e) =>
                    handleInputChange("designPreferences", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="colorsToAvoid">Colors or Styles to Avoid</Label>
                <Textarea
                  id="colorsToAvoid"
                  placeholder="Are there any design styles or color schemes you want to avoid?"
                  value={formData.colorsToAvoid}
                  onChange={(e) =>
                    handleInputChange("colorsToAvoid", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Technical & Logistical Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Technical & Logistical Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="timeline">Desired Timeline</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleInputChange("timeline", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                    <SelectItem value="1-month">1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange("budget", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1000">Under $1,000</SelectItem>
                    <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                    <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="over-10000">Over $10,000</SelectItem>
                    <SelectItem value="discuss">Let's discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="multipleLanguages">
                  Multiple Languages Support
                </Label>
                <Select
                  value={formData.multipleLanguages}
                  onValueChange={(value) =>
                    handleInputChange("multipleLanguages", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="maybe">Maybe in the future</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Additional Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="additionalNotes">
                  Additional Requirements or Information
                </Label>
                <Textarea
                  id="additionalNotes"
                  placeholder="Are there any other requirements or information you'd like to share?"
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    handleInputChange("additionalNotes", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button type="submit" size="lg" className="px-12 py-6 text-lg">
              Submit Questionnaire
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
