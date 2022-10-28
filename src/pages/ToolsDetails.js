import React from 'react';
import { useParams } from 'react-router-dom';
import ToolsData from '../data/ToolsData';
import ExploreTool from './components/ExploreTool';

export default function ToolsDetails() {
  const [toolsData] = React.useState(ToolsData);
  const { id } = useParams();
  const tool = toolsData.find((tool) => tool.id === Number(id));
  return (
    <div>
      <ExploreTool tool={tool} />
    </div>
  );
}
