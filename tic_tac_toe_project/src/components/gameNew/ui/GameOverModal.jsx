import UiModal from '../../uikit/UiModal.jsx';
import UiButton from '../../uikit/UiButton.jsx';

export default function GameOverModal({ winnerName, players }) {
  return (
    <UiModal width="md" isOpen={winnerName} onClose={() => console.log('close')}>
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-3">{players}</div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton variant="outline" size="md">
          Вернуться
        </UiButton>
        <UiButton variant="primary" size="md">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
