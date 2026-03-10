import { Activity, Database, Cpu, Zap, Bell, CheckCircle, Map as MapIcon } from 'lucide-react';

export const sections = [
  { id: 'problem-context', title: '1. Problem Context', icon: Activity },
  { id: 'pre-qc-parameters', title: '2. Pre-QC Parameters', icon: Database },
  { id: 'ml-model-design', title: '3. ML Model Design', icon: Cpu },
  { id: 'real-time-inference', title: '4. Real-Time Inference', icon: Zap },
  { id: 'alert-workflow', title: '5. Alert & Intervention', icon: Bell },
  { id: 'validation-monitoring', title: '6. Validation & Monitoring', icon: CheckCircle },
  { id: 'implementation-roadmap', title: '7. Implementation Roadmap', icon: MapIcon },
];

export const features = [
  { category: 'Library QC', name: 'Concentration (ng/µL)', type: 'Numeric', method: 'Qubit / Tapestation' },
  { category: 'Library QC', name: 'Fragment Size Peak (bp)', type: 'Numeric', method: 'Tapestation / Bioanalyzer' },
  { category: 'Library QC', name: 'Purity (260/280, 260/230)', type: 'Numeric', method: 'Nanodrop' },
  { category: 'DNB QC', name: 'DNB Concentration (ng/µL)', type: 'Numeric', method: 'Qubit (ssDNA)' },
  { category: 'DNB QC', name: 'DNB Quality Score / Size', type: 'Numeric', method: 'DNB preparation QC step' },
  { category: 'Reagents', name: 'Lot Numbers', type: 'Categorical', method: 'Barcode Scanner / LIMS' },
  { category: 'Reagents', name: 'Storage Temp Logs (°C)', type: 'Time-series', method: 'Cold storage IoT sensors' },
  { category: 'Reagents', name: 'Days to Expiry', type: 'Numeric', method: 'LIMS / Reagent RFID' },
  { category: 'Flow Cell', name: 'Flow Cell Lot', type: 'Categorical', method: 'Barcode Scanner' },
  { category: 'Flow Cell', name: 'Visual Inspection Flag', type: 'Boolean', method: 'Manual entry / Camera' },
  { category: 'Run Params', name: 'Read Length (e.g., PE100, PE150)', type: 'Categorical', method: 'Sequencer Software' },
  { category: 'Run Params', name: 'Cycle Number', type: 'Numeric', method: 'Sequencer Software' },
  { category: 'Run Params', name: 'Lane Configuration', type: 'Categorical', method: 'Sequencer Software' },
  { category: 'Metadata', name: 'Operator ID', type: 'Categorical', method: 'LIMS / Sequencer Login' },
  { category: 'Metadata', name: 'Time of Day', type: 'Datetime', method: 'System Clock' },
  { category: 'Metadata', name: 'Instrument ID', type: 'Categorical', method: 'Sequencer Software' },
  { category: 'Metadata', name: 'Previous Run Outcome', type: 'Categorical', method: 'Sequencer Logs / LIMS' },
];
