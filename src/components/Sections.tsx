import React from 'react';
import { Activity, Database, Cpu, Zap, Bell, CheckCircle, Map as MapIcon, ChevronRight, AlertTriangle, Check, XCircle } from 'lucide-react';
import { features } from '../data';

export const ProblemContext = () => (
  <section id="problem-context" className="py-16 border-b border-slate-200">
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-slate-900">
      <Activity className="mr-3 text-indigo-600" size={32} />
      1. Problem Context
    </h2>
    <div className="prose prose-slate max-w-none">
      <p className="text-lg text-slate-700 leading-relaxed mb-8">
        Next-Generation Sequencing (NGS) run failures on high-throughput platforms like the <strong className="text-slate-900">MGI DNBSEQ series</strong> incur significant costs. A single failed run wastes expensive sequencing reagents, flow cells, and precious library preparation time. More importantly, it delays critical patient results in clinical settings and disrupts research timelines.
      </p>
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <h3 className="text-xl font-medium mb-6 text-slate-900">Common Causes of MGI Run Failure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Poor library quality', desc: 'Adapter dimers, incorrect fragment size distribution.' },
            { title: 'Insufficient DNA input', desc: 'Leading to low DNB (DNA Nanoball) concentration.' },
            { title: 'Flow cell issues', desc: 'Physical damage, improper loading, or vacuum seal failures.' },
            { title: 'Reagent degradation', desc: 'Expired kits, temperature excursions during storage or transit.' },
            { title: 'DNB generation failure', desc: 'Rolling circle amplification (RCA) issues.' },
            { title: 'Incorrect clustering density', desc: 'Over-loading or under-loading DNBs on the patterned array.' }
          ].map((item, i) => (
            <div key={i} className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
              <AlertTriangle className="mr-3 text-amber-500 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="block text-slate-900 mb-1">{item.title}</strong>
                <span className="text-slate-600 text-sm">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const PreQCParameters = () => (
  <section id="pre-qc-parameters" className="py-16 border-b border-slate-200">
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-slate-900">
      <Database className="mr-3 text-indigo-600" size={32} />
      2. Pre-QC Parameters to Monitor
    </h2>
    <p className="text-lg text-slate-700 leading-relaxed mb-8">
      To predict failures before initiating the sequencing run, we must monitor key pre-QC parameters. These serve as the input features for our machine learning model.
    </p>
    
    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="py-4 px-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">Feature Category</th>
            <th className="py-4 px-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">Feature Name</th>
            <th className="py-4 px-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">Data Type</th>
            <th className="py-4 px-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">Collection Method</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {features.map((feature, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3 px-6 text-sm font-medium text-indigo-600">{feature.category}</td>
              <td className="py-3 px-6 text-sm text-slate-800">{feature.name}</td>
              <td className="py-3 px-6 text-sm text-slate-500 font-mono bg-slate-50/50 rounded inline-block mt-2 mb-2 ml-6">{feature.type}</td>
              <td className="py-3 px-6 text-sm text-slate-600">{feature.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export const MLModelDesign = () => (
  <section id="ml-model-design" className="py-16 border-b border-slate-200">
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-slate-900">
      <Cpu className="mr-3 text-indigo-600" size={32} />
      3. ML Model Design
    </h2>
    
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 mb-3">Recommended Algorithm: XGBoost</h3>
        <p className="text-slate-700 mb-4">
          <strong>Extreme Gradient Boosting (XGBoost)</strong> is recommended for this tabular data problem.
        </p>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li className="flex items-center"><Check className="mr-2 text-emerald-500" size={16}/> Handles tabular data exceptionally well.</li>
          <li className="flex items-center"><Check className="mr-2 text-emerald-500" size={16}/> Robust to outliers and naturally handles missing values (common in lab data).</li>
          <li className="flex items-center"><Check className="mr-2 text-emerald-500" size={16}/> Provides excellent interpretability through tree-based feature importance.</li>
          <li className="flex items-center"><Check className="mr-2 text-emerald-500" size={16}/> Computationally lightweight for rapid inference at the sequencer.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Target Variable</h3>
          <p className="text-slate-700 text-sm mb-4">Multi-class classification approach:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-3 shrink-0"></div>
              <div><strong className="text-slate-900">Pass:</strong> Meets all Q30 and yield specifications.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-3 shrink-0"></div>
              <div><strong className="text-slate-900">Partial Fail:</strong> Usable data, but lower yield or quality than expected (e.g., under-clustering).</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-3 shrink-0"></div>
              <div><strong className="text-slate-900">Full Fail:</strong> Run aborted or data unusable (e.g., fluidics failure, zero yield).</div>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Training Data & Imbalance</h3>
            <p className="text-slate-700 text-sm">
              Minimum of <strong>500-1000 historical runs</strong> required. Since failures are rare, we will use <strong>SMOTE</strong> (Synthetic Minority Over-sampling Technique) or apply class weights (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded">scale_pos_weight</code>) to penalize misclassification of the minority class.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Feature Importance</h3>
            <p className="text-slate-700 text-sm">
              <strong>SHAP (SHapley Additive exPlanations)</strong> values will be used to explain individual predictions (e.g., "Run flagged for failure due to low DNB concentration and historical operator error rate").
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const RealTimeInference = () => (
  <section id="real-time-inference" className="py-16 border-b border-slate-200">
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-slate-900">
      <Zap className="mr-3 text-indigo-600" size={32} />
      4. Real-Time Inference Pipeline
    </h2>
    
    <div className="bg-slate-900 rounded-2xl p-8 text-white mb-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2 text-indigo-300">Integration & Trigger</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            The model is deployed as a microservice (REST API) integrated with the Laboratory Information Management System (LIMS) and the MGI ZLIMS/sequencer control software.
          </p>
          <div className="mt-4 p-4 bg-white/10 rounded-xl border border-white/10">
            <strong className="text-white block mb-1">Trigger Point:</strong>
            <span className="text-slate-300 text-sm">Inference is triggered immediately after the "Pre-Sequencing QC" step is logged in the LIMS, just before the operator loads the flow cell and reagents onto the DNBSEQ instrument.</span>
          </div>
        </div>
      </div>
    </div>

    <h3 className="text-xl font-semibold text-slate-900 mb-6">Decision Thresholds</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white border-t-4 border-emerald-500 p-6 rounded-xl shadow-sm">
        <div className="text-emerald-500 font-bold text-2xl mb-2">&lt; 15%</div>
        <h4 className="font-semibold text-slate-900 mb-2">Proceed Normally</h4>
        <p className="text-sm text-slate-600">Low probability of failure. The run is cleared to start without intervention.</p>
      </div>
      <div className="bg-white border-t-4 border-amber-500 p-6 rounded-xl shadow-sm">
        <div className="text-amber-500 font-bold text-2xl mb-2">15% - 40%</div>
        <h4 className="font-semibold text-slate-900 mb-2">Proceed with Warning</h4>
        <p className="text-sm text-slate-600">Flag for review. Prompt operator to double-check flow cell seating and reagent volumes before starting.</p>
      </div>
      <div className="bg-white border-t-4 border-red-500 p-6 rounded-xl shadow-sm">
        <div className="text-red-500 font-bold text-2xl mb-2">&gt; 40%</div>
        <h4 className="font-semibold text-slate-900 mb-2">Halt Run</h4>
        <p className="text-sm text-slate-600">High probability of failure. Requires Lab Manager override to proceed. Option to abort and re-QC.</p>
      </div>
    </div>
  </section>
);

export const AlertWorkflow = () => (
  <section id="alert-workflow" className="py-16 border-b border-slate-200">
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-slate-900">
      <Bell className="mr-3 text-indigo-600" size={32} />
      5. Alert & Intervention Workflow
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Alert Routing</h3>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <Activity className="text-indigo-600" size={20} />
            </div>
            <div>
              <strong className="block text-slate-900">Sequencing Technician</strong>
              <span className="text-sm text-slate-600">Real-time UI alert on the LIMS dashboard or instrument control PC.</span>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="bg-red-100 p-2 rounded-lg mr-4">
              <AlertTriangle className="text-red-600" size={20} />
            </div>
            <div>
              <strong className="block text-slate-900">Lab Manager</strong>
              <span className="text-sm text-slate-600">Email/SMS alert for "Halt Run" recommendations requiring override.</span>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="bg-amber-100 p-2 rounded-lg mr-4">
              <Database className="text-amber-600" size={20} />
            </div>
            <div>
              <strong className="block text-slate-900">Bioinformatics Team</strong>
              <span className="text-sm text-slate-600">Slack/Teams notification for "Partial Fail" predictions to prepare data rescue pipelines.</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Corrective Actions</h3>
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
          <ul className="space-y-6">
            <li>
              <strong className="text-slate-900 block mb-1">Low DNB Concentration</strong>
              <p className="text-sm text-slate-600">Re-quantify DNBs, potentially re-make DNBs from the library before loading.</p>
            </li>
            <li>
              <strong className="text-slate-900 block mb-1">Reagent Expiry / Temp Excursion</strong>
              <p className="text-sm text-slate-600">Swap reagent cartridge for a fresh lot. Quarantine suspect reagents.</p>
            </li>
            <li>
              <strong className="text-slate-900 block mb-1">Flow Cell Issue</strong>
              <p className="text-sm text-slate-600">Inspect flow cell vacuum seating, clean manifold, check for physical defects.</p>
            </li>
          </ul>
          <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 text-sm">
            <strong>Option to Abort:</strong> The system provides a clear "Abort & Re-QC" button, logging the prevented failure to calculate ROI (Return on Investment) of the ML model.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ValidationMonitoring = () => (
  <section id="validation-monitoring" className="py-16 border-b border-slate-200">
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-slate-900">
      <CheckCircle className="mr-3 text-indigo-600" size={32} />
      6. Model Validation & Monitoring
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Validation Metrics</h3>
        <p className="text-sm text-slate-600 mb-4">Evaluated using a hold-out test set.</p>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">Recall (Sensitivity)</span>
            <span className="text-slate-500 text-right w-2/3">Crucial to catch as many failures as possible.</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">Precision</span>
            <span className="text-slate-500 text-right w-2/3">Must be high enough to avoid alert fatigue (false positives).</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">AUC-ROC</span>
            <span className="text-slate-500 text-right w-2/3">Overall model discriminative ability.</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium text-slate-700">Confusion Matrix</span>
            <span className="text-slate-500 text-right w-2/3">To analyze Pass vs. Partial Fail vs. Full Fail misclassifications.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Continuous Learning</h3>
          <p className="text-sm text-slate-600">
            A scheduled pipeline (e.g., monthly) extracts new run outcomes from the LIMS, appends them to the training set, and retrains the model automatically.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Drift Detection</h3>
          <p className="text-sm text-slate-600">
            Monitor input feature distributions. If a new MGI High-Throughput kit is introduced, DNB concentration ranges might shift. If drift exceeds a threshold (e.g., via Kolmogorov-Smirnov test), trigger an alert for manual model review.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const ImplementationRoadmap = () => (
  <section id="implementation-roadmap" className="py-16">
    <h2 className="text-3xl font-semibold mb-8 flex items-center text-slate-900">
      <MapIcon className="mr-3 text-indigo-600" size={32} />
      7. Implementation Roadmap
    </h2>

    <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-6 space-y-12 pb-8">
      {[
        { phase: 'Phase 1', title: 'Data Collection & Labeling', time: 'Months 1-2', desc: 'Extract historical run logs, QC data, and outcomes from LIMS and MGI sequencer logs. Clean and label data.' },
        { phase: 'Phase 2', title: 'Model Training & Validation', time: 'Months 2-3', desc: 'Train XGBoost model, tune hyperparameters, and validate against historical hold-out data. Develop SHAP explainability dashboard.' },
        { phase: 'Phase 3', title: 'Pilot Deployment (Shadow Mode)', time: 'Months 4-5', desc: 'Deploy model in "shadow mode." Predictions are generated and logged but not shown to operators. Compare predictions to actual outcomes to build confidence.' },
        { phase: 'Phase 4', title: 'Full Automation', time: 'Month 6+', desc: 'Integrate alerts into the active workflow. Implement the "Halt Run" threshold. Establish continuous monitoring and retraining pipelines.' }
      ].map((step, i) => (
        <div key={i} className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm"></div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">
                <span className="text-indigo-600 mr-2">{step.phase}:</span>
                {step.title}
              </h3>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{step.time}</span>
            </div>
            <p className="text-slate-600">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
