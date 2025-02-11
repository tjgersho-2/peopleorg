'use client'
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const PeopleOrg = () => {
  const [activeProposals, setActiveProposals] = useState([
    {
      id: 1,
      title: "Community Garden Initiative",
      description: "Establish shared gardens in unused urban spaces",
      votes: { yes: 156, no: 43, abstain: 12 },
      stage: "deliberation",
      comments: [
        { text: "Could we include educational programs?", upvotes: 45 },
        { text: "We need to consider water access", upvotes: 38 }
      ]
    },
    {
      id: 2,
      title: "Transparent Budget Allocation",
      description: "Real-time tracking of community resource usage",
      votes: { yes: 203, no: 15, abstain: 8 },
      stage: "voting",
      comments: [
        { text: "Add blockchain verification", upvotes: 67 },
        { text: "Include historical comparisons", upvotes: 52 }
      ]
    }
  ]);

  const [selectedProposal, setSelectedProposal] = useState(null);

  const getStageIcon = (stage) => {
    switch(stage) {
      case 'deliberation':
        return <AlertCircle className="text-blue-500" />;
      case 'voting':
        return <CheckCircle className="text-green-500" />;
      default:
        return <XCircle className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Community Decision Platform</h2>
      
      <div className="grid gap-4">
        {activeProposals.map(proposal => (
          <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{proposal.title}</h3>
                  <p className="text-gray-600 mt-2">{proposal.description}</p>
                </div>
                <div className="flex items-center">
                  {getStageIcon(proposal.stage)}
                  <span className="ml-2 capitalize">{proposal.stage}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex space-x-4">
                  <div className="text-green-600">Yes: {proposal.votes.yes}</div>
                  <div className="text-red-600">No: {proposal.votes.no}</div>
                  <div className="text-gray-600">Abstain: {proposal.votes.abstain}</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Top Comments</h4>
                {proposal.comments.map((comment, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <p>{comment.text}</p>
                    <span className="text-gray-600">↑ {comment.upvotes}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PeopleOrg;