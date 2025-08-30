from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q

from .models import Resume, ResumeToolRun
from .serializers import ResumeSerializer, ResumeToolRunSerializer


class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all().order_by('-created_at')
    serializer_class = ResumeSerializer

    @action(detail=True, methods=['post'], url_path='run-tool')
    def run_tool(self, request, pk=None):
        """Simple resume tool: match provided target skills against resume skills and score it."""
        resume = self.get_object()
        target_skills = request.data.get('target_skills', '')  # comma-separated
        target = {s.strip().lower() for s in target_skills.split(',') if s.strip()}
        have = {s.strip().lower() for s in (resume.skills or '').split(',') if s.strip()}
        matched = sorted(target.intersection(have))
        score = int(round((len(matched) / max(1, len(target))) * 100)) if target else 0

        run = ResumeToolRun.objects.create(
            resume=resume,
            keyword_hits=len(matched),
            matched_skills=", ".join(matched),
            score=score,
            notes=f"Matched {len(matched)} of {len(target)} target skills."
        )
        return Response(ResumeToolRunSerializer(run).data, status=status.HTTP_201_CREATED)


class ResumeToolRunViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResumeToolRun.objects.all().order_by('-created_at')
    serializer_class = ResumeToolRunSerializer