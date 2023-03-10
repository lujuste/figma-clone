import { NodeProps, Handle, Position } from "reactflow";

export function Square(props: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-[200px] h-[200px]">
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        className="-left-5 w-3 h-3 bg-blue-400/80"
        id="left"
        type="source"
        position={Position.Left}
      />
      <Handle
        className="-bottom-5 w-3 h-3 bg-blue-400/80"
        id="bottom"
        type="source"
        position={Position.Bottom}
      />
      <Handle
        className="-top-5 w-3 h-3 bg-blue-400/80"
        id="top"
        type="source"
        position={Position.Top}
      />
    </div>
  );
}
