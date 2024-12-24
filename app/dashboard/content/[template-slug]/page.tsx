"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModal";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

function CreateNewContent() {
  const { "template-slug": templateSlug } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState<
    TEMPLATE | undefined
  >(undefined);
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router = useRouter();

  const GenerateAiContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      router.push("/dashboard/billing");
      return;
    }

    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + " , " + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAiPrompt);
      setAiOutput(result?.response.text());

      // Save to database via API
      await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
    } catch (error) {
      console.error("Error generating AI content:", error);
    }

    setLoading(false);
  };

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
  };

  useEffect(() => {
    const resolveTemplate = () => {
      const template = Templates?.find((item) => item.slug === templateSlug);
      setSelectedTemplate(template);
    };

    if (templateSlug) {
      resolveTemplate();
    }
  }, [templateSlug]);

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAiContent(v)}
          loading={loading}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
