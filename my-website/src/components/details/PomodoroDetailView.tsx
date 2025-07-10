import type { Project } from '../../types/project';

interface PomodoroDetailViewProps {
  project: Project;
  onBack: () => void;
}

/**
 * Custom Pomodoro Project Detail View
 * 
 * Purpose: Showcase completely custom layout for specific projects
 * This demonstrates how to create unique designs when the flexible
 * ProjectDetailView isn't sufficient for your vision.
 */
const PomodoroDetailView: React.FC<PomodoroDetailViewProps> = ({
  project,
  onBack
}) => {
  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          backgroundColor: 'white',
          cursor: 'pointer'
        }}
      >
        ← Back to Grid
      </button>
      
      {/* Custom Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          FPGA-Based Productivity Timer with Custom RISC-V Implementation
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {project.links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '2rem',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Two-Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Left Column: Technical Details */}
        <div>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '1rem',
            marginBottom: '2rem'
          }}>
            <h2 style={{ color: '#495057', marginBottom: '1rem' }}>
              Technical Architecture
            </h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Hardware Platform</h4>
              <p>DE1-SoC Development Board with Cyclone V FPGA</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Processor Core</h4>
              <p>Custom 32-bit RISC-V implementation with 5-stage pipeline</p>
            </div>
            <div>
              <h4>Peripherals</h4>
              <ul>
                <li>7-Segment Display Controller</li>
                <li>Push Button Input Handler</li>
                <li>Timer Interrupt System</li>
                <li>LED Status Indicators</li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Technologies Used</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#e7f3ff',
                    color: '#0066cc',
                    borderRadius: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Demo */}
        <div>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Live Demo</h3>
            
            {/* Mock Timer Display */}
            <div style={{
              backgroundColor: '#000',
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '3rem',
              padding: '2rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              border: '4px solid #333'
            }}>
              25:00
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <button style={{
                padding: '1rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 'bold'
              }}>
                START
              </button>
              <button style={{
                padding: '1rem',
                backgroundColor: '#ffc107',
                color: '#000',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 'bold'
              }}>
                PAUSE
              </button>
              <button style={{
                padding: '1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 'bold'
              }}>
                RESET
              </button>
            </div>

            {/* Status LEDs Simulation */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#28a745',
                boxShadow: '0 0 10px #28a745'
              }} />
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#6c757d'
              }} />
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#6c757d'
              }} />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Status: Working Session Active
            </p>
          </div>
        </div>
      </div>

      {/* Code Section */}
      <div style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: '2rem',
        borderRadius: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>
          Verilog Implementation Highlight
        </h3>
        <pre style={{ 
          margin: 0, 
          fontFamily: 'Consolas, monospace',
          fontSize: '0.9rem',
          lineHeight: 1.5
        }}>
{`// Pomodoro Timer State Machine
module pomodoro_timer(
    input wire clk,
    input wire reset,
    input wire start_btn,
    input wire pause_btn,
    output reg [7:0] minutes,
    output reg [7:0] seconds,
    output reg session_active
);

    typedef enum {IDLE, WORKING, BREAK, PAUSED} state_t;
    state_t current_state, next_state;

    always @(posedge clk) begin
        if (reset) begin
            current_state <= IDLE;
            minutes <= 8'd25;
            seconds <= 8'd0;
            session_active <= 1'b0;
        end else begin
            current_state <= next_state;
            // Timer logic implementation...
        end
    end
endmodule`}
        </pre>
      </div>

      {/* Files Section */}
      {project.files && project.files.length > 0 && (
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Project Files</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.files.map(file => (
              <a
                key={file.name}
                href={file.url}
                download
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.3s ease'
                }}
              >
                📁 {file.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroDetailView; 