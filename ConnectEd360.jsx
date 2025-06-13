jsximport React, { useState, useEffect } from 'react';
import { Plus, Upload, Download, Filter, Search, X, FileText, AlertCircle, Clock, CheckCircle } from 'lucide-react';

const ConnectEd360 = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [subscription, setSubscription] = useState('free'); // free, mid, premium
  const [importText, setImportText] = useState('');
  const [showUploadArea, setShowUploadArea] = useState(false);
  const [sortField, setSortField] = useState('nameAlias');
  const [sortDirection, setSortDirection] = useState('asc');

  const subscriptionLimits = {
    free: { students: 3, features: ['basic'] },
    mid: { students: 50, features: ['basic', 'import', 'export'] },
    premium: { students: 999, features: ['basic', 'import', 'export', 'ai', 'templates'] }
  };

  const [newStudent, setNewStudent] = useState({
    firstInitial: '',
    lastInitial: '',
    nameAlias: '',
    idAlias: '',
    grade: '',
    campus: '',
    dateOfBirth: '',
    initialEvaluation: false,
    referralDate: '',
    consentDate: '',
    evaluationDueDate: '',
    meetingDate: '',
    status: 'In Progress',
    psychologist: '',
    notes: '',
    parentContact: '',
    teacherContact: '',
    accommodations: '',
    evaluationType: 'Initial',
    priority: 'Medium',
    lastUpdate: new Date().toISOString().split('T')[0]
  });

  // [REST OF YOUR CODE CONTINUES HERE - EXACT COPY FROM YOUR ARTIFACT]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* [ALL YOUR JSX CONTINUES HERE - EXACT COPY] */}
    </div>
  );
};

// Mount the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ConnectEd360 />);
